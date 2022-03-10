import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./message.css";
let email = localStorage.getItem("email");

export const Inbox = () => {
  let [compile, setcompile] = useState(false);
  let [Inbox, setinb] = useState([]);

  let [message, setMessage] = useState({
    to: "",
    from: email,
    message: "",
  });

  const handleChange = (e) => {
    setMessage((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage = () => {
    db.collection(`users/${email}/sent`).add(message);
    db.collection(`users/${message.to}/inbox`)
      .add(message)
      .then(() => window.location.reload());
  };

  const SetInbox = () => {
    let Inboc = [];
    db.collection(`users/${email}/inbox`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let userdetails = { ...doc.data() };
          Inboc.push(userdetails);
        });
        setinb(Inboc);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  useEffect(() => {
    setTimeout(SetInbox, 1000);
  }, []);

  return (
    <div className="Inbox">
      <div className="SentBox">
        {Inbox.map((msgs) => (
          <div className="Message">
            <h3>{msgs.from}</h3>
            <p>{msgs.message}</p>
          </div>
        ))}
      </div>
      <div className="Compile" style={{ height: compile ? "" : "6vh" }}>
        <h4> Send New Message</h4>
        To :{" "}
        <input
          type="text"
          name="to"
          placeholder="Enter Email / Username"
          onChange={handleChange}
        ></input>{" "}
        <textarea
          onChange={handleChange}
          name="message"
          placeholder="Enter Message"
        ></textarea>
        <button onClick={() => sendMessage()}>Send {">"}</button>
        <h5 onClick={() => setcompile(!compile)}>{compile ? " x " : " > "}</h5>
      </div>
    </div>
  );
};

export const Sent = () => {
  let [Sent, setsent] = useState([]);
  const SetSentMessages = () => {
    let SentBox = [];
    db.collection(`users/${email}/sent`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          let userdetails = { ...doc.data() };
          SentBox.push(userdetails);
        });
        setsent(SentBox);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  console.log(Sent);
  useEffect(() => {
    setTimeout(SetSentMessages, 1000);
  }, []);

  return (
    <div className="Sent">
      <div className="SentBox">
        {Sent.map((msgs) => (
          <div className="Message">
            <h3>{msgs.to}</h3>
            <p>{msgs.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
