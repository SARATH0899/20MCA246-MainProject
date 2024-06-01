import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import "../assets/styles/our_dealers.css";
import bosch from "../assets/images/bosch.png";
import dewalt from "../assets/images/dewalt.png";
import black_decker from "../assets/images/black_decker.png";
import hitachi from "../assets/images/hitachi.png";

const OUR_DEALERS = [
  {
    name: "Bosch",
    since: "Since 2001",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: bosch,
  },
  {
    name: "Hitachi",
    since: "Since 2003",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: hitachi,
  },
  {
    name: "Dewalt",
    since: "Since 2005",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: dewalt,
  },
  {
    name: "Black-Decker",
    since: "Since 2000",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: black_decker,
  },
];

const OurDealers = () => {
  return (
    <>
      {OUR_DEALERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={item.twitUrl}>
                  <FaTwitter style={{ color: "white" }}/>
                </Link>

                <Link to={item.website}>
                  <FaGlobe style={{ color: "white" }} />
                </Link>

                <Link to={item.instaUrl}>
                  <FaInstagram style={{ color: "white" }}/>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3" style={{ color: "darkred" }}>{item.name}</h6>
            <p className="section__description text-center" style={{ color: "orange" }}>
              {item.since}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurDealers;