import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Add logic to send password reset email to the provided email address
    // For example, you can dispatch an action or make an API call to handle the password reset process.
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6}>
          <h2 className="text-center">Forgot Password</h2>
          <Form onSubmit={submitHandler}>
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
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordScreen;