import React from "react";

import "./components.css";
import img from "./BackRes/hospital.mp4";

import serviceIcon from "./BackRes/fav.png";

const AboutPage = (props) => {
  let services = [
    {
      servicename: "Service1",
      image: serviceIcon,
    },
    {
      servicename: "Service2",
      image: serviceIcon,
    },
    {
      servicename: "Service3",
      image: serviceIcon,
    },
    {
      servicename: "Service4",
      image: serviceIcon,
    },
    {
      servicename: "Service5",
      image: serviceIcon,
    },
    {
      servicename: "Service6",
      image: serviceIcon,
    },
    {
      servicename: "Service7",
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
          We have been in the field since 20 years and have expertised in
          delivering quality service to our beloved people.
        </h2>
        <h2>We maintain strict protocols in all aspects.</h2>
        <h3>Our Services</h3>
        <div className="ServicesAbout">
          {services.map((item) => (
            <div className="ServiceCard">
              <img src={item.image}></img>
              <h2>{item.servicename}</h2>
            </div>
          ))}
        </div>
      </div>
      <video src={img} controls></video>
    </div>
  );
};

export default AboutPage;
