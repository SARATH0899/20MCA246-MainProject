import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [stage, setStage] = useState(1); // Stage 1: Initial stage, Stage 2: Enter OTP, Stage 3: Enter new password
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const submitEmailHandler = async (e) => {
    e.preventDefault();
    
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
        alert(data.message || 'Failed to send OTP. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Error sending OTP. Please try again later.');
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
        alert(data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Error verifying OTP. Please try again later.');
    }
  };

  const submitNewPasswordHandler = async (e) => {
    e.preventDefault();
    // Update password with the new one
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
        alert(data.message || 'Failed to update password. Please try again later.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('Error updating password. Please try again later.');
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
              </Form>
            </>
          )}

          {stage === 3 && (
            <>
              <h2 className="text-center">Enter New Password</h2>
              <Form onSubmit={submitNewPasswordHandler}>
                <Form.Group controlId='newPassword'>
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter new password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className='mt-2 btn-block'>
                  Update Password
                </Button>
              </Form>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPasswordScreen;
