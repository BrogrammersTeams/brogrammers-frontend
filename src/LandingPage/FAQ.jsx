import React, { useState } from "react";

import "./components.css";

const FAQPage = () => {
  let FAQ = [
    {
      qsn: "Who can post to DevConnect?",
      ans: "Anyone who has an account on DevConnect can post. You have permission to make a new post of any kind as long as it meets our guidelines. ",
    },
    {
      qsn: "Who is DevConnect for ?",
      ans: "You! And it’s not just developers who build companies but for small teams, project managers, and college professors all use DevConnect to connect different people and build amazing things together.",
    },
    {
      qsn: "Why should I use DevConnect?",
      ans: "Because it is a platform where you can connect with other developers and build your own projects. You can also post your projects and get feedback from other developers. ",
    },
    {
      qsn: "How do I start using DevConnect?",
      ans: "All you need to do is sign up and create a profile. You can then start posting your projects and getting feedback from other developers.",
    },
    {
      qsn: "What is the best thing about DevConnect?",
      ans: "you can have one to one conversations with other developers and build your own projects. ",
    },
    {
      qsn: "Will DevConnect help you to improve your skills?",
      ans: "yes, it definitely will. ",
    },
    {
      qsn: "How do I start using DevConnect?",
      ans: "All you need to do is sign up and create a profile. You can then start posting your projects and getting feedback from other developers.",
    },
  ];

  let [idx, setidx] = useState(0);
  return (
    <div className="AboutPage">
      <div className="Faq">
        {/* <h1>
          <b>FAQ's</b>
        </h1> */}
        {FAQ.map((item, index) => (
          <div
            className="FAQsn"
            onClick={() => setidx(index)}
            style={{
              transform: index == idx ? "scale(1.1)" : "",
              borderColor: index == idx ? "gray" : "",
              color: index == idx ? "rgb(247, 230, 248)" : "",
            }}
          >
            <h2 className={index == idx ? "qsntxtcolor" : ""}>{item.qsn}</h2>
            <h1 className={index == idx ? "qsntxtcolor" : ""}>{">"}</h1>
          </div>
        ))}
      </div>
      <div className="FAQAns">
        <h2>{FAQ[idx].ans}</h2>
      </div>
    </div>
  );
};

export default FAQPage;
