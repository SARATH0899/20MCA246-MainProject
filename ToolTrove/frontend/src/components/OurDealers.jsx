import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import "../assets/styles/our_dealers.css";
import bosch from "../assets/images/bosch.jpg";
import dewalt from "../assets/images/dewalt.png";
import black_decker from "../assets/images/black_decker.png";
import hitachi from "../assets/images/hitachi.png";
import planet_power from "../assets/images/planet_power.png";
import makita from "../assets/images/makita.png";
import ferm from "../assets/images/ferm.png";
import dongcheng from "../assets/images/dongcheng.jpeg";

const OUR_DEALERS = [
  {
    name: "Dewalt",
    since: "Since 2001",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: dewalt,
  },
  {
    name: "Black & Decker",
    since: "Since 2000",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: black_decker,
  },
  {
    name: "Hitachi",
    since: "Since 2005",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: hitachi,
  },
  {
    name: "Bosch",
    since: "Since 2003",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: bosch,
  },
  {
    name: "Dong Cheng",
    since: "Since 2001",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: dongcheng,
  },
  {
    name: "Ferm",
    since: "Since 2003",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: ferm,
  },
  {
    name: "Planet Power",
    since: "Since 2000",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: planet_power,
  },
  {
    name: "Makita",
    since: "Since 2005",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: makita,
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