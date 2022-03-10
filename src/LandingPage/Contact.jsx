import React, { useState } from "react";

import "./components.css";
import logo from "../res/black.gif";
import { db } from "../firebase";

const ContactsPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    db.collection("newsletter")
      .add({
        email: email,
      })
      .then(() => {
        alert("Your response is Recorded");

        setEmail("");
        // setMessage("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="AboutPage ">
      <img className="AboutLgo" src={logo}></img>
      <div className="Text Contacts">
        <h1>
          <b>Still have Queries ?</b>
        </h1>
        <h3>Always Available at {">"} </h3>

        <h2>brogrammers.team@gmail.com</h2>
        <h2>+91 88668 86688</h2>
        <h2>instagram / brogrammers</h2>
        <h3>Subscribe to Our Newsletter{">"}</h3>

        <div className="inputNewsletter">
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
