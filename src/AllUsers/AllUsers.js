import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./AllUsers.css";

import { Link } from "react-router-dom";
import { db } from "../firebase";

const Users = (props) => {
  let email = localStorage.getItem("email");
  const Addfollower = () => {
    db.collection(`users/${email}/following`).add({ follows: props.email });
  };

  let [Following, setinb] = useState([]);

  const SetInbox = () => {
    let Inboc = [];
    db.collection(`users/${email}/following`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let userdetails = { ...doc.data() };
          Inboc.push(userdetails.follows);
        });
        setinb(Inboc);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    SetInbox();
  }, []);

  return (
    <div className="card2">
      <div className="UpperCard">
        <div className="img1">
          <img className="card-img-top" src={props.image} alt="Avatar" />
        </div>
        <div className="container2">
          <p className="uname">{props.name}</p>
          <p className="about">{props.bio}</p>
          <p className="about">{props.email}</p>
        </div>
        <div className="container3">
          <button
            type="button"
            className="btn1"
            onClick={() => {
              Addfollower();
            }}
          >
            {props.email in Following ? "Following" : "Follow"}
          </button>
          <Link to={`/profile?${props.uuid}`}>
            <button type="button" className="btn1">
              View Profile
            </button>
          </Link>
        </div>
      </div>
      <lr />
      <div className="BottomCard">
        <h5
          style={{
            // align left
            textAlign: "left",
            marginTop: "10px",
            marginLeft: "28px",
          }}
        >
          SKILLS :
        </h5>
        <div className="container">
          <p className="skills">
            <span className="badge1">HTML</span>
            <span className="badge1">CSS</span>
            <span className="badge1">JavaScript</span>
            <br></br>
            <span className="badge1">React</span>
            <span className="badge1">Node.js</span>
            <span className="badge1">Express</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Users;
