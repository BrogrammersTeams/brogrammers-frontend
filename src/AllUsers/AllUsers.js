import React from "react";
import { Container } from "react-bootstrap";
import "./AllUsers.css";

const Users = () => {
  return (
    <div>
      <Container>
        <div class="card">
          <div class="UpperCard">
            <div>
              <img
                className="card-img-top"
                src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3"
                alt="Avatar"
              />
            </div>
            <div class="container ">
              <p className="uname">John Doe</p>
              <p className="about">Architect & Engineer</p>
            </div>
            <div class="container">
              <button type="button" class="btn1">
                Follow
              </button>
              <button type="button" class="btn1">
                View Profile
              </button>
            </div>
          </div>
          <lr />
          <div class="BottomCard">
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
            <div class="container">
              <p className="skills">
                <span class="badge1">HTML</span>
                <span class="badge1">CSS</span>
                <span class="badge1">JavaScript</span>
                <br></br>
                <span class="badge1">React</span>
                <span class="badge1">Node.js</span>
                <span class="badge1">Express</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Users;
