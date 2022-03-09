import React from 'react';
import * as React from "react";
import { useState } from "react";
import "./CreateProject.css";

const CreateProject = () => {
    
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
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">Create New Project</span>
            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter Project name"
            >
              <input
                className="input100"
                type="text"
                name="name"
                placeholder="Project Name"
                required
              />
              <span className="focus-input100"></span>
            </div>
            {/* <div
              className="wrap-input100 validate-input"
              data-validate="Please enter email: e@a.x"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                required
              />
              <span className="focus-input100"></span>
            </div> */}
            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter your message"
            >
              <textarea
                className="input100"
                name="message"
                placeholder="Project Description"
                required
              />
              <span className="focus-input100"></span>
            </div>
            <div
              className="wrap-input100 validate-input"
              data-validate="Please enter tags"
            >
              <input
                className="input100"
                type="text"
                name="tags"
                placeholder="Tags"
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Project link"
            >
              <input
                className="input100"
                type="link"
                name="link"
                placeholder="Project link"
                required
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container ">
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

            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                <p>Submit</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
}
 
export default CreateProject;
