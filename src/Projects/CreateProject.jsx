import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { db } from "../firebase";
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

  let uid = JSON.stringify(localStorage.getItem("uuid"));
  let email = localStorage.getItem("email");

  let [NewSign, setNewSign] = useState({
    username: email,
    // projectName: "",
    // projectDesc: "",
    // projectlink: "",
    // projectTags: tags,

    uuid: uid,
    projectName: "",
    projectDescription: "",
    projectLink: "",
    tags: tags,
    // projectID: uuid(),
  });

  const handleChange = (e) => {
    setNewSign((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    // saveToFireBase();
    // alert(tags);

    let { uuid, projectName, projectDescription, projectLink } = NewSign;

    let obj = {
      email: NewSign.username,
      project: {
        uuid,
        projectName,
        projectDescription,
        projectLink,
        tags,
      },
    };

    console.log("Object is", obj);
    const { data } = await axios.post(
      "https://brogrammers-backend.herokuapp.com/project",
      obj
    );

    if (true) alert(data);
  };

  const saveToFireBase = () => {
    // db.collection(`users/${email}/projects`).add(NewSign);
  };

  useEffect(() => console.log(tags));

  return (
    <div>
      <div className="container-contact100">
        <div className="wrap-contact100">
          <h1>Create New Project</h1>
          <div
            className="wrap-input100 validate-input"
            data-validate="Please enter Project name"
          >
            <input
              className="input100"
              type="text"
              name="projectName"
              placeholder="Project Name"
              onChange={handleChange}
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
              name="projectDescription"
              placeholder="Project Description"
              required
              onChange={handleChange}
            />
            <span className="focus-input100"></span>
          </div>
          {/* <div
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
            </div> */}

          <div
            className="wrap-input100 validate-input"
            //   data-validate="Project link"
          >
            <input
              className="input100"
              type="link"
              name="projectLink"
              placeholder="Project link"
              onChange={handleChange}
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

          <div className="container-contac100-form-btn">
            <button
              className="contact100-form-bn"
              onClick={(e) => handleSubmit()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
