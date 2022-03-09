import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import "./dashboard.css";

import QRCode from "qrcode";

import menu from "../res/menu.png";
import logo from "../res/MainLogo.gif";
import { Inbox, Sent } from "../Messaging/messages";
import MyProjects from "../Projects/MyProjects";
import CreateProject from "../Projects/CreateProject";
import GlobalProjects from "../Projects/GlobalProjects";
import HomeDash from "./HomeDash";

const Dashboard = () => {
  let uid = JSON.stringify(localStorage.getItem("uuid"));
  let email = localStorage.getItem("email");
  let fullName = "";
  const setDetails = () => {
    let Box = [];
    let userdetails;
    db.collection("users")
      .where("uuid", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          userdetails = { ...doc.data() };
        });
      })

      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  let [menuShow, setMenuShow] = useState(true);
  let [dashmenu, setdashMenu] = useState(0);
  let [profileMenu, setProfileMenu] = useState(false);

  let [qr, setqr] = useState("");

  const setQR = () => {
    QRCode.toDataURL(uid).then((data) => setqr(data));
  };

  let [update, setUpdate] = useState({
    fullName: "",
  });

  const handleChange = (e) => {
    setUpdate((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const FBUpdate = () => {
    db.collection("users")
      .doc(email)
      .update(update)
      .then(() => {
        localStorage.setItem("fullName", update.fullName);
        window.location.reload();
      });
  };

  useEffect(() => {
    setTimeout(setDetails, 5);
  }, []);
  return (
    <div className="Dashboard">
      <div className="DashHeader">
        <div className="leftMenu">
          <img
            src={menu}
            className="Menuu"
            onClick={() => setMenuShow(!menuShow)}
          />

          <img src={logo} className="DashLogo" />
        </div>
        <div className="SettingsProfile">
          <img
            src={menu}
            onClick={() => {
              setdashMenu(5);
            }}
          ></img>
          <img
            src={menu}
            onClick={() => {
              setdashMenu(0);
            }}
          ></img>
          <img src={menu}></img>
          <img
            src={menu}
            onClick={() => {
              setQR();
              setProfileMenu(!profileMenu);
            }}
          ></img>
        </div>
        <div
          className="ProfileModal"
          style={{ transform: profileMenu ? "translateX(0vw)" : "" }}
        >
          <div className="imgQR">
            <img src={menu} className="ProfileImage"></img>
            <img src={qr} />
          </div>

          <h2>{email}</h2>
          <h3>{fullName}</h3>

          <h4
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Sign Out
          </h4>
        </div>
      </div>

      <div className="DashDown">
        <div className="DashBar" style={{ width: menuShow ? "" : "3vw" }}>
          <h4 style={{ opacity: !menuShow ? "0" : "1" }}>Messages</h4>

          <div
            className="MenuBox"
            style={{
              backgroundColor: dashmenu == 1 ? "rgb(243, 44, 120)" : "",
            }}
            onClick={() => setdashMenu(1)}
          >
            <img src={menu}></img>
            <h3
              style={{
                color: dashmenu == 1 ? "white" : "",
              }}
            >
              Inbox
            </h3>
          </div>
          <div
            className="MenuBox"
            style={{
              backgroundColor: dashmenu == 2 ? "rgb(243, 44, 120)" : "",
            }}
            onClick={() => setdashMenu(2)}
          >
            <img src={menu}></img>
            <h3
              style={{
                color: dashmenu == 2 ? "white" : "",
              }}
            >
              Sent
            </h3>
          </div>

          <h4 style={{ opacity: !menuShow ? "0" : "1" }}>Projects</h4>

          <div
            className="MenuBox"
            style={{
              backgroundColor: dashmenu == 3 ? "rgb(243, 44, 120)" : "",
            }}
            onClick={() => setdashMenu(3)}
          >
            <img src={menu}></img>
            <h3
              style={{
                color: dashmenu == 3 ? "white" : "",
              }}
            >
              My Projects{" "}
            </h3>
          </div>
          <div
            className="MenuBox"
            style={{
              backgroundColor: dashmenu == 4 ? "rgb(243, 44, 120)" : "",
            }}
            onClick={() => setdashMenu(4)}
          >
            <img src={menu}></img>
            <h3
              style={{
                color: dashmenu == 4 ? "white" : "",
              }}
            >
              New Project
            </h3>
          </div>
        </div>
        <div className="DashboardContent">
          {dashmenu == 0 && <HomeDash />}
          {dashmenu == 1 && <Inbox />}
          {dashmenu == 2 && <Sent />}
          {dashmenu == 3 && <MyProjects />}
          {dashmenu == 4 && <CreateProject />}
          {dashmenu == 5 && <GlobalProjects />}
        </div>
      </div>

      {/* <div className="LoginMe">
        <div
          className="LoginModal"
          style={{ height: "60vh", marginTop: "-5vh" }}
        >
          <div className="QuickSetup">
            <div className="InputBox">
              <input
                name="fullName"
                onChange={handleChange}
                type="text"
                placeholder="Enter Full Name"
              ></input>
            </div>
            <button
              className="LoginButton"
              onClick={() => {
                FBUpdate();
              }}
            >
              Save
            </button>
            
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
