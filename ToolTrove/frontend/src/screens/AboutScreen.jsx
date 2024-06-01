import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import tools_bg from "../assets/images/tools_bg.jpg";
import cutter from "../assets/images/cutter.jpg";
import tools_banner from "../assets/images/tools_banner.png";

const AboutScreen = () => {
  return (
    <div className="about-page">
      <Container
        fluid
        className="common-section text-white text-center py-5 position-relative"
        style={{
          backgroundImage: `url(${tools_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <h1 style={{ position: "relative", zIndex: 2 }}>About Us</h1>
      </Container>
      <Container className="about-section py-5">
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className="about__section-content">
              <h4 className="section__subtitle" style={{ color: "goldenrod" }}>
                Our Services
              </h4>
              <h2 className="section__title" style={{ color: "darkblue" }}>
                Why to choose our rental service?
              </h2>
              <p
                className="section__description"
                style={{ textAlign: "justify" }}
              >
                Our Rental Service is dedicated to offering you top-notch
                equipment tailored to meet the demands of your projects. Our
                mission is to empower professionals and DIY enthusiasts alike by
                providing access to a comprehensive range of high-quality power
                tools. Whether you're tackling construction, renovation, or home
                improvement tasks, we've got you covered. We take pride in our
                commitment to customer satisfaction, striving to exceed your
                expectations at every step of the rental process. With a focus
                on reliability, efficiency, and affordability, we aim to be your
                trusted partner in achieving success in your endeavors.
                Experience the convenience of seamless rentals, expert guidance,
                and reliable support—choose Power Tools Rental for all your
                equipment needs.
              </p>
              <div className="about__section-item">
                <ul className="section__description">
                  <li>
                    Wide range of high-quality power tools available for rent.
                  </li>
                  <li>Competitive rental rates to fit your budget.</li>
                  <li>
                    We provide comprehensive resources and guidance to help you
                    choose the perfect tools for your project.
                  </li>
                  <li>
                    Convenient online booking system for hassle-free rentals.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="about-page-img">
              <img src={cutter} alt="Drive" className="w-100 rounded-3" />
            </div>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div className="about-page-img">
              <img src={tools_banner} alt="Drive" className="w-100 rounded-3" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="about-page-content">
              <h2 className="section-title" style={{ color: "darkblue" }}>
                Providing Reliable Power Tool Rental Solutions
              </h2>
              <p className="section-description">
                We are dedicated to offering safe and efficient power tool
                rental services. Our commitment lies in providing high-quality
                tools that meet your needs.
              </p>
              <p className="section-description">
                Whether you're a professional contractor or a DIY enthusiast,
                our range of power tools is designed to help you complete your
                projects with ease and confidence.
              </p>
              <div className=" d-flex align-items-center gap-3 mt-4">
                <span className="fs-4" style={{ color: "green" }}>
                  <FaWhatsapp />
                </span>
                <div>
                  <h6
                    className="section-subtitle"
                    style={{ color: "goldenrod" }} >
                    Have any Queries?
                  </h6>
                  <h4 style={{ color: "darkblue" }}>+91-8899654565</h4>
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
