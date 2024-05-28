import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactScreen = () => {
  return (
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
  );
};

export default ContactScreen;
