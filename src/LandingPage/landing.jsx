import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

import logo from "../res/black.gif";
import signLogo from '../res/yo.gif'
import { db } from "../firebase";

import menuIcon from "../res/menu.png";
import menuClose from "../res/cross.png";
import AboutPage from "./About";
import FAQPage from "./FAQ";
import ContactsPage from "./Contact";

import { v4 as uuid } from "uuid";
import axios from "axios";
const LandingPage = () => {
  let [menu, showMenu] = useState(false);
  let [user, setuser] = useState(undefined);

  let [username, setUsername] = useState(undefined);
  let [userp, setUserp] = useState(undefined);

  let [showLogin, setShowLogin] = useState(false);
  let [loginSignup, setloginSignup] = useState(false);

  let [loginSignupSec, setloginSignupSec] = useState(false);
  let [clientOtp, setClientOtp] = useState(0);
  let [userOtp, setUserOtp] = useState(0);

  let [genuuid, setuuid] = useState("");

  let [NewSign, setNewSign] = useState({
    fullName: "",
    password: "",
    confirm: "",
    email: "",
    uuid: "",
  });

  let [errorMsg, setErrorMsg] = useState(false);

  const handleChange = (e) => {
    setNewSign((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const sendUserToBackend = async () => {
    const { data } = await axios.post(
      "https://brogrammers-backend.herokuapp.com/user",
      {
        email: NewSign.email,
        uuid: NewSign.uuid,
      }
    );

    if (true) setClientOtp(data.otp);
    // alert(data);
  };

  const getOTP = () => Math.floor(Math.random() * 1000000);

  const verifyOTP = () => {
    // e.preventDefault();
    if (clientOtp != userOtp) {
      alert("Otp doesnt Match!!!");
      return false;
    }
    // alert("Passed!!");
    db.collection("users")
      .doc(NewSign.email)
      .set(NewSign)
      .then(() => {
        localStorage.setItem("YayAuth", true);
        localStorage.setItem("uuid", NewSign.uuid);
        localStorage.setItem("email", NewSign.email);
        localStorage.setItem("fullName", "");

        // setsignedInUser(NewSign);
        window.location.reload();
      });
    sendUserToBackend();

    return true;
  };

  const sendOtp = async () => {
    const { data } = await axios.post(
      "https://brogrammers-backend.herokuapp.com/email",
      {
        to: NewSign.email,
        subject: "Email Verification - DevConnect",
        topic: "OTP",
      }
    );

    if (true) setClientOtp(data.otp);
    // alert(data);
  };

  const getUser = () => {
    let userdetails;
    db.collection("users")
      .where("email", "==", username)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          userdetails = doc.data();
          if (userp == userdetails.password) {
            localStorage.setItem("YayAuth", true);
            localStorage.setItem("Username", userdetails.uuid);
            localStorage.setItem("email", userdetails.email);
            localStorage.setItem("fullName", userdetails.fullName);

            window.location.reload();
          } else {
            setErrorMsg(true);
          }
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  let [showingPage, setShowingPage] = useState(0);

  return (
    <div className="MainHolder">
      <div className="Page">
        <div className="NavBar" data-aos="fade-down" data-aos-delay="100">
          <img src={logo} id="fullLogo" />
          <ul className="navs">
            <li
              style={{ color: showingPage == 0 ? "rgb(235, 168, 12)" : "" }}
              onClick={() => setShowingPage(0)}
            >
              HOME
            </li>
            <li
              style={{ color: showingPage == 1 ? "rgb(235, 168, 12)" : "" }}
              onClick={() => setShowingPage(1)}
            >
              ABOUT
            </li>
            <li
              style={{ color: showingPage == 2 ? "rgb(235, 168, 12)" : "" }}
              onClick={() => setShowingPage(2)}
            >
              FAQ
            </li>
            <li
              style={{ color: showingPage == 3 ? "rgb(235, 168, 12)" : "" }}
              onClick={() => setShowingPage(3)}
            >
              CONTACT
            </li>
          </ul>
          <ul className="login" onClick={() => setShowLogin(true)}>
            <li id="SignMenu">
              {"|    "}&nbsp; SIGN UP &nbsp;{">>    "}
            </li>
          </ul>
        </div>
        <img
          src={menuIcon}
          style={{ opacity: menu ? "0" : "" }}
          onClick={() => showMenu(!menu)}
          id="resMenu"
        />
        <div
          className="ResponsiveMenu"
          style={{
            transform: menu ? "translateX(0vw)" : "",
          }}
        >
          <img
            src={menuIcon}
            style={{
              opacity: menu ? "" : "0",
              transform: menu ? "rotate(0deg)" : "",
            }}
            onClick={() => showMenu(!menu)}
            id="resMenu"
          />{" "}
        </div>

        <div
          style={{
            opacity: showingPage == 0 ? "1" : "0",

            transform: showingPage == 0 ? "" : "translateX(-100vw)",
          }}
          className="PageModal"
        >
          <div
            className="Heads"
            style={{
              transition: showingPage == 0 ? "opacity 1 0.5s" : "0",

              transform: menu ? "translateX(-40vw)" : "",
            }}
          >
            <h1
              className="OncomingHead"
              data-aos="fade-down"
              data-aos-delay="2200"
            >
              Join the Comunity
            </h1>
            <h2
              className="OncomingSubHead"
              data-aos="fade-up"
              data-aos-delay="2600"
            >
              Grow your network{" "}
            </h2>
          </div>
          <div
            className="BackImageMake"
            style={{
              transform: menu ? "translateX(-40vw)" : "",
            }}
          >
            <div className="Img1" data-aos="fade-up" data-aos-delay="200" />
            <div className="Inn">
              <div className="Img2" data-aos="fade-down" data-aos-delay="600" />
              <div className="Img3" data-aos="fade-up" data-aos-delay="1000" />
            </div>
            <div className="Img4" data-aos="fade-up" data-aos-delay="1400" />
            <div className="Img5" data-aos="fade-down" data-aos-delay="1800" />
          </div>
        </div>
        <div
          style={{
            opacity: showingPage == 1 ? "1" : "0",

            transform:
              showingPage == 1
                ? "translateX(0vw)"
                : showingPage == 2 || showingPage == 3
                ? "translateX(-200vw)"
                : "translateX(100vw)",
          }}
          className="PageModal"
        >
          <AboutPage Styling="1" />
        </div>
        <div
          style={{
            opacity: showingPage == 2 ? "1" : "0",
            transform:
              showingPage == 2
                ? "translateX(0vw)"
                : showingPage == 3
                ? "translateX(-100vw)"
                : "translateX(100vw)",
          }}
          className="PageModal"
        >
          <FAQPage />
        </div>
        <div
          style={{
            opacity: showingPage == 3 ? "1" : "0",

            transform:
              showingPage == 3
                ? "translateX(0vw)"
                : showingPage == 4
                ? "translateX(-100vw)"
                : "translateX(100vw)",
          }}
          className="PageModal"
        >
          <ContactsPage />
        </div>
        <div className="landingfooter" data-aos="fade-up" data-aos-delay="2800">
          <h1
            className="ModalChanger"
            onClick={() => {
              setShowingPage(showingPage + 1);
              if (showingPage == 3) {
                setShowingPage(0);
              }
            }}
          >
            {showingPage == 0
              ? "ABOUT >"
              : showingPage == 1
              ? "FAQ's >"
              : showingPage == 2
              ? "CONTACTS >"
              : ""}
          </h1>
          <h1
            className="ModalChanger2"
            onClick={() => {
              setShowingPage(showingPage - 1);
            }}
          >
            {showingPage == 0
              ? ""
              : showingPage == 1
              ? "< Home "
              : showingPage == 2
              ? "< ABOUT"
              : showingPage == 3
              ? "< FAQ's"
              : ""}
          </h1>
        </div>
      </div>
      <div
        className="LoginMe"
        style={{ transform: showLogin ? "" : "translateY(-100vh)" }}
      >
        <div className="LoginModal">
          <div className="Login">
            <div
              className="Log"
              style={{
                transform: loginSignup ? "translateX(30vw)" : "",
              }}
            >
              <h1>Sign In</h1>
              <div className="InputBox">
                <input
                  type="text"
                  placeholder="Email / Username"
                  onChange={(e) => setUsername(e.target.value)}
                ></input>
              </div>
              <div className="InputBox">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setUserp(e.target.value)}
                ></input>
              </div>
              <button
                className="LoginButton"
                onClick={() => {
                  setErrorMsg(false);
                  getUser();
                }}
              >
                Log In
              </button>
              <h3 onClick={() => setloginSignup(true)}>
                Don't have a account ? Create Now{" "}
              </h3>
              <h4
                style={{ color: "red", display: errorMsg ? "block" : "none" }}
              >
                Email & Password Do not match
              </h4>
            </div>
            <div
              className="Log"
              style={{
                transform: loginSignup
                  ? loginSignupSec
                    ? "translateX(-30vw)"
                    : ""
                  : "translateY(-70vh)",
              }}
            >
              <h1>Create Account</h1>
              <div className="InputBox">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                ></input>
              </div>
              {/* <div className="InputBox">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Your Name"
                  onChange={handleChange}
                ></input>
            </div> */}

              <div className="InputBox">
                <input
                  name="password"
                  type="password"
                  placeholder="Choose Password"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="InputBox">
                <input
                  name="confirm"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                ></input>
              </div>

              <button
                className="LoginButton"
                onClick={() => {
                  sendOtp();
                  db.collection("users")
                    .doc(NewSign.email)
                    .get()
                    .then((doc) => {
                      if (doc.exists) {
                        alert("Email Exists");
                      } else {
                        NewSign.uuid = uuid();
                        // alert(genuuid)
                        setloginSignupSec(true);
                      }
                    })

                    .catch((error) => {
                      alert("Error getting documents: ", error);
                    });
                }}
              >
                Next {">"}
              </button>

              <h3 onClick={() => setloginSignup(false)}>
                Already have a account ? Log in
              </h3>
            </div>

            <div
              className="Log"
              style={{
                transform: loginSignupSec ? "" : "translateX(30vw)",
              }}
            >
              <h1>Verify Email</h1>

              <div className="InputBox">
                <input
                  name="securityans"
                  type="text"
                  placeholder="OTP"
                  className="OTP"
                  onChange={(e) => setUserOtp(e.target.value)}
                ></input>
              </div>
              <button
                className="LoginButton"
                onClick={() => {
                  verifyOTP();
                //   alert(NewSign.email);
                }}
              >
                Sign Up
              </button>
              <h3 onClick={() => setloginSignupSec(false)}>
                {" < "} Change Email Address
              </h3>
            </div>

            <div className="Sign">
              <h6
                className="ModalCloseButton"
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                X
              </h6>
             
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
