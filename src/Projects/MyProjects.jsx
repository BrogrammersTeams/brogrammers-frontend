import axios from "axios";
import React, { useEffect, useState } from "react";

import FileContainer from "./FilesModal";

const MyProjects = () => {
  let [projects, setProjects] = useState([]);

  const email = localStorage.getItem("email");

  const getProjects = async () => {
    console.log("email is", email);
    const { data } = await axios.get(
      `https://brogrammers-backend.herokuapp.com/project/id/?email=${email}`
    );

    console.log("data from backend", data[0]);

    if (true) setProjects(data[0].projects);
    // if (true) setfiles(data[0].projects?.files);
    console.log(files);
    console.log(data[0].projects?.files);
  };

  useEffect(() => {
    getProjects();
  }, []);

  //   let [files, setfiles] = useState(false);
  let [modal, setModal] = useState(false);

  let [fileName, setfileName] = useState("");
  let [fileContent, setfileContent] = useState("");

  let [showFiles, setshowFiles] = useState(false);

  let [files, setfiles] = useState([
    {
      type: ".py",
      name: "Demo.py",
      content: "def fun: pass",
    },
  ]);

  const handleFileAddition = () => {
    setModal(true);
  };

  return (
    <div className="GlobalProjects">
      <h1>My Projects</h1>
      {projects.map((projectCard) => (
        <div className="ProjectCard">
          <h3>{projectCard?.projectName}</h3>
          <h4>{projectCard?.projectDescription}</h4>
          <h5>{projectCard?.projectLink}</h5>
          <h2
            onClick={() => setshowFiles(!showFiles)}
            style={{ cursor: "pointer" }}
          >
            View Files
          </h2>
          {/* <h3>
            <div className="tags">
              {projectCard?.tags?.map((eachItem) => (
                <p>{eachItem}</p>
              ))}
            </div>
          </h3> */}

          {showFiles &&
            projectCard?.files.map((eachFile) => (
              <div key={Math.random().toString()}>
                <h2
                  className="Fille"
                  onClick={() => {
                    setfileContent(eachFile.content);
                    setfileName(eachFile.name);
                    setModal(!modal);
                  }}
                >
                  {eachFile.name.toLowerCase()}
                </h2>
              </div>
            ))}

          <h4
            className="Adddd"
            onClick={() => {
              handleFileAddition();
              setModal(!modal);
              setfileContent("");
              setfileName("");
            }}
          >
            + Add
          </h4>
          {modal && (
            <FileContainer
            //   setModal={setModal}
              projectName={projectCard?.projectName}
              FileContent={fileContent}
              FileName={fileName}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MyProjects;
