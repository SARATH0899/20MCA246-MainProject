import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { useRegisterMutation } from '../slices/usersApiSlice';
import { setCredentials } from '../slices/authSlice';
import { toast } from 'react-toastify';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else if (!validatePassword(password)) {
      toast.error('Password must meet the criteria');
    } else if (!validateEmail(email)) {
      toast.error('Email must be valid');
    } else {
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in)$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const errors = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
    setPasswordErrors(errors);
    return Object.values(errors).every((error) => error === true);
  };

  return (
    <FormContainer>
      <h1>Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className='my-3' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter name'
            value={name}
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
          {name.length > 3 && <div style={{ color: 'green' }}>Name is valid</div>}
        </Form.Group>

        <Form.Group className='my-3' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            name='em'
            onChange={(e) => setEmail(e.target.value)}
          />
          {validateEmail(email) && <div style={{ color: 'green' }}>Email is valid</div>}
          {!validateEmail(email) && <div style={{ color: 'red' }}>Invalid email address</div>}
        </Form.Group>

        <Form.Group className='my-3' controlId='mobile'>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Mobile No'
            value={mobile}
            name='mobile'
            onChange={(e) => setMobile(e.target.value)}
          />
        {(isNaN(mobile) || mobile.length !== 10) && <div style={{ color: 'red' }}>Mobile Number must be numeric and 10 digits</div>}
        {mobile.length === 10 && !isNaN(mobile) && <div style={{ color: 'green' }}>Mobile Number is valid</div>}
        </Form.Group>

        <Form.Group className='my-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            name='pw'
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className='my-3' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            name='cfpw'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div style={{ textDecoration: passwordErrors.length ? 'line-through' : 'none', color: passwordErrors.length ? 'green' : 'red' }}>
            *The Password must be 8 characters long
          </div>
          <div style={{ textDecoration: passwordErrors.uppercase ? 'line-through' : 'none', color: passwordErrors.uppercase ? 'green' : 'red' }}>
            *The Password must contain at least one uppercase
          </div>
          <div style={{ textDecoration: passwordErrors.lowercase ? 'line-through' : 'none', color: passwordErrors.lowercase ? 'green' : 'red' }}>
            *The Password must contain at least one lowercase
          </div>
          <div style={{ textDecoration: passwordErrors.number ? 'line-through' : 'none', color: passwordErrors.number ? 'green' : 'red' }}>
            *The Password must contain at least one number
          </div>
          <div style={{ textDecoration: passwordErrors.specialChar ? 'line-through' : 'none', color: passwordErrors.specialChar ? 'green' : 'red' }}>
            *The Password must contain at least one special character
          </div>
        </Form.Group>
        <Button disabled={isLoading} type='submit' name='demoid' variant='primary'>
          Register
        </Button>

        {isLoading && <Loader />}
      </Form>

      <Row className='py-3'>
        <Col>
          Already have an account?{' '}
          <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterScreen;
