import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Settings.css";
const UserSettings = () => {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);
  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (key === "," && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }

    setIsKeyReleased(false);
  };
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="col1" xs={8}>
            <div id="container">
              <div class="card">
                <img
                  className="profileImg"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80"
                  alt="Lago di Braies"
                />

                <div class="domains">
                  <span class="tag1">Python</span>
                  <span class="tag1">HTML</span>
                  <div class="name">
                    <label className="label" for="name">
                      Name :
                    </label>
                    <input
                      className="nameInput"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div class="email">
                    <label className="label" for="email">
                      Email :
                    </label>
                    <input
                      className="emailInput"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div class="Mobile">
                    <label className="label" for="Mobile">
                      Mobile :
                    </label>
                    <input
                      className="MobileInput"
                      // type mobile number
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      placeholder="Mobile"
                    />
                  </div>
                  <div class="github">
                    <label className="label" for="github">
                      Github :
                    </label>
                    <input
                      className="githubInput"
                      type="link"
                      placeholder="Github"
                    />
                  </div>
                  <div class="linkedin">
                    <label className="label" for="linkedin">
                      Linkedin :
                    </label>
                    <input
                      className="linkedinInput"
                      type="link"
                      placeholder="Linkedin"
                    />
                  </div>
                  <div className="contain2">
                    <label className="label" for="linkedin">
                      Skills :
                    </label>
                    <br />
                    <br />
                    {tags.map((tag) => (
                      <div className="tag">{tag}</div>
                    ))}
                    <input
                      value={input}
                      placeholder="Enter a tag (Use comma ',' to add more tags)"
                      onKeyDown={onKeyDown}
                      onKeyUp={onKeyUp}
                      onChange={onChange}
                    />
                  </div>
                  {tags.map((tag, index) => (
                    <div className="tag">
                      {tag}
                      <button onClick={() => deleteTag(index)}>x</button>
                    </div>
                  ))}
                  <div class="bio">
                    <label className="label" for="bio">
                      Bio :
                    </label>
                    <textarea
                      className="bioInput"
                      type="text"
                      placeholder="Bio"
                    />
                  </div>
                  <br />
                  <button>Update</button>
                </div>
              </div>
            </div>
          </Col>
          <Col className="col2" xs={4}>
            <div class="container" className="cardqr">
              <div class="card">
                <h3>My DevConnect QR Code </h3>
                <img
                  className="qrCode"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
                  alt="QR Code"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserSettings;
