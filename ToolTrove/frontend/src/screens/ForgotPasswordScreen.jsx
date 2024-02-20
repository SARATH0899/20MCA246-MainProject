import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [stage, setStage] = useState(1); // Stage 1: Initial stage, Stage 2: Enter OTP, Stage 3: Enter new password
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(90);
  const [passwordErrors, setPasswordErrors] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });

  // Timer to enable the resend OTP button after 60 seconds
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const resetTimer = () => {
    setResendDisabled(true);
    setTimer(90);
  };

  const submitEmailHandler = async (e) => {
    e.preventDefault();
    resetTimer(); // Reset timer when requesting OTP
    // Send email to request OTP
    try {
      const response = await fetch('/api/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStage(2); // Move to next stage to enter OTP
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to send OTP. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setError('Error sending OTP. Please try again later.');
    }
  };

  const submitOTPHandler = async (e) => {
    e.preventDefault();
    // Verify OTP
    // If OTP is correct, proceed to the next step
    try {
      // Send OTP for verification
      const response = await fetch('/api/users/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, otp }),
      });
      if (response.ok) {
        setStage(3); // Move to next stage to enter new password
      } else {
        const data = await response.json();
        setError(data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setError('Error verifying OTP. Please try again later.');
    }
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

  const submitNewPasswordHandler = async (e) => {
    e.preventDefault();
    // Update password with the new one
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Password validation
    if (!validatePassword(newPassword)) {
      setError('Password must meet the following criteria:');
      return;
    }
    try {
      const response = await fetch('/api/users/reset-password1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });
      if (response.ok) {
        alert('Password updated successfully!');
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to update password. Please try again later.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      setError('Error updating password. Please try again later.');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
          {stage === 1 && (
            <>
              <h2 className="text-center">Forgot Password</h2>
              <Form onSubmit={submitEmailHandler}>
                <Form.Group controlId='email'>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-2 btn-block'>
                  Send OTP
                </Button>
              </Form>
            </>
          )}

          {stage === 2 && (
            <>
              <h2 className="text-center">Enter OTP</h2>
              <Form onSubmit={submitOTPHandler}>
                <Form.Group controlId='otp'>
                  <Form.Label>OTP</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter OTP'
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-2 btn-block'>
                  Verify OTP
                </Button>
                <p className="text-muted text-center mt-2">
                  {resendDisabled ? (
                    `Resend OTP in ${timer} seconds`
                  ) : (
                    <Button
                      variant="link"
                      onClick={submitEmailHandler}
                      disabled={resendDisabled}
                    >
                      Resend OTP
                    </Button>
                  )}
                </p>
              </Form>
            </>
          )}

          {stage === 3 && (
            <>
              <h2 className="text-center">Enter New Password</h2>
              <Form onSubmit={submitNewPasswordHandler}>
                <Form.Group className='mt-3' controlId='newPassword'>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter new password'
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      validatePassword(e.target.value);
                    }}
                  ></Form.Control>
                </Form.Group>
                <Form.Group className='mt-3' controlId='confirmPassword'>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm new password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  ></Form.Control>
                  <div style={{ color: passwordErrors.length ? 'green' : 'red' }}>
                    *The Password must be 8 characters long
                  </div>
                  <div style={{ color: passwordErrors.uppercase ? 'green' : 'red' }}>
                    *The Password must contain at least one uppercase
                  </div>
                  <div style={{ color: passwordErrors.lowercase ? 'green' : 'red' }}>
                    *The Password must contain at least one lowercase
                  </div>
                  <div style={{ color: passwordErrors.number ? 'green' : 'red' }}>
                    *The Password must contain at least one number
                  </div>
                  <div style={{ color: passwordErrors.specialChar ? 'green' : 'red' }}>
                    *The Password must contain at least one special character
                  </div>
                </Form.Group>

                <Button type='submit' variant='outline-warning' className='mt-3 btn-block'>
                  Update Password
                </Button>
              </Form>
              {error && <p className="text-danger">{error}</p>}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordScreen;
