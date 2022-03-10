import React from "react";

import "./components.css";
import img from "./BackRes/Untitled.mp4";

import serviceIcon from "./BackRes/fav.png";

const AboutPage = (props) => {
  let services = [
    {
      servicename: "Meet new People",
      image: serviceIcon,
    },
    {
      servicename: "Messaging",
      image: serviceIcon,
    },
    {
      servicename: "Store Projects",
      image: serviceIcon,
    },
    {
      servicename: "Video Calling",
      image: serviceIcon,
    },
    {
      servicename: "Collaborate",
      image: serviceIcon,
    },
    {
      servicename: "Open Source",
      image: serviceIcon,
    },
    {
      servicename: "Industry Standards",
      image: serviceIcon,
    },
  ];
  return (
    <div className="AboutPage">
      <div className="Text">
        <h1>
          Say <b> Know </b> More !
        </h1>
        <h2>
  
        </h2>
  
        <h3>Our Services</h3>
        <div className="ServicesAbout">
          {services.map((item) => (
            <div className="ServiceCard">
              <img src={item.image}></img>
              <h4>{item.servicename}</h4>
            </div>
          ))}
        </div>
      </div>
      <video src={img} controls></video>
    </div>
  );
};

export default AboutPage;
