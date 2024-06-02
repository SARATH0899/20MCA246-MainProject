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
import bullet from "../assets/images/bullet.png";
import cumi from "../assets/images/cumi.jpeg";
import electrex from "../assets/images/electrex.jpg";
import fein from "../assets/images/fein.png";
import hikoki from "../assets/images/hikoki.png";
import honda from "../assets/images/honda.png";
import ibell from "../assets/images/ibell.png";
import ideal from "../assets/images/ideal.png";
import ineco from "../assets/images/ineco.png";
import KPT from "../assets/images/KPT.png";
import maktec from "../assets/images/maktec.png";
import metabo from "../assets/images/metabo.png";
import powertex from "../assets/images/powertex.png";
import ryobi from "../assets/images/ryobi.png";
import stanley from "../assets/images/stanley.png";
import yuri from "../assets/images/yuri.png";


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
  {
    name: "Bullet",
    since: "Since 2001",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: bullet,
  },
  {
    name: "Cumi",
    since: "Since 2000",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: cumi,
  },
  {
    name: "Electrex",
    since: "Since 2005",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: electrex,
  },
  {
    name: "Fein",
    since: "Since 2003",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: fein,
  },
  {
    name: "Hi-Koki",
    since: "Since 2001",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: hikoki,
  },
  {
    name: "Honda",
    since: "Since 2003",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: honda,
  },
  {
    name: "ibell",
    since: "Since 2000",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: ibell,
  },
  {
    name: "Ideal",
    since: "Since 2005",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: ideal,
  },
  {
    name: "Ineco",
    since: "Since 2001",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: ineco,
  },
  {
    name: "K P T",
    since: "Since 2000",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: KPT,
  },
  {
    name: "Maktec",
    since: "Since 2005",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: maktec,
  },
  {
    name: "Metabo",
    since: "Since 2003",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: metabo,
  },
  {
    name: "Powertex",
    since: "Since 2001",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: powertex,
  },
  {
    name: "Ryobi",
    since: "Since 2003",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: ryobi,
  },
  {
    name: "Stanley",
    since: "Since 2000",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: stanley,
  },
  {
    name: "Yuri",
    since: "Since 2005",
    instaUrl: "#",
    twitUrl: "#",
    website: "#",
    imgUrl: yuri,
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