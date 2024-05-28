import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import tools_bg from "../assets/images/tools_bg.jpg";

const AboutScreen = () => {
  return (
    <div className="about-page">
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
        <h1 style={{ position: 'relative', zIndex: 2 }}>About Us</h1>
      </Container>
      <Container className="about-section py-5">
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className="about-page-img">
              <img src={tools_bg} alt="Drive" className="w-100 rounded-3" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="about-page-content">
              <h2 className="section-title">
                Providing Reliable Power Tool Rental Solutions
              </h2>
              <p className="section-description">
                We are dedicated to offering safe and efficient power tool rental services. 
                Our commitment lies in providing high-quality tools that meet your needs.
              </p>
              <p className="section-description">
                Whether you're a professional contractor or a DIY enthusiast, 
                our range of power tools is designed to help you complete your projects 
                with ease and confidence. 
              </p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <span className="fs-4">
                  <i className="ri-phone-line"></i>
                </span>
                <div>
                  <h6 className="section-subtitle">Have any Queries?</h6>
                  <h4>+91-8899654565</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutScreen;
