import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import tools_bg from "../assets/images/tools_bg.jpg";

const ContactScreen = () => {
  return (
  <div className="contact-page">
      <Container
        fluid
        className="common-section text-white text-center py-5 position-relative"
        style={{
          backgroundImage: `url(${tools_bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        ></div>
        <h1 style={{ position: 'relative', zIndex: 2 }}>Connect to Us</h1>
      </Container>
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h1>Contact Us</h1>
          <p>
            If you have any questions, concerns, or feedback, please feel free
            to contact us using the form below. We’d love to hear from you!
          </p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactScreen;
