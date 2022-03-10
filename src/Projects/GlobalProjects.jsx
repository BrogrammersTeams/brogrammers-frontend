import React from "react";
import "./projects.css";

const GlobalProjects = () => {
  let ProjectCards = [
    {
      projectName: "TSEC Hacks 2022",
      creatorName: "Akshay",
      tags: ["Web", "ML", "css"],
      projectDesc: "The repository on DevConnect",
      projectID: "dscbhado -fchsdv -sfvsiudvj",
    },
    {
      projectName: "First Repo",
      creatorName: "Siddhi Patil",
      tags: ["ML", "css"],
      projectDesc: "My First Repo",
      projectID: "dscbhado -fchsdv -sfvsiudvj",
    },
  ];
  return (
    <div className="GlobalProjects">
      <h1>Explore All Projects</h1>
      {ProjectCards.map((proj) => (
        <div className="ProjectCard">
          <h3>{proj.projectName}</h3>
          <h5>{proj.creatorName}</h5>
          <p>{proj.projectDesc}</p>

          <div className="tags">
            {proj.tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>

          <div className="tags"></div>
        </div>
      ))}
    </div>
  );
};

export default GlobalProjects;
