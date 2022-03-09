import React, { useState } from "react";

import "./components.css";

const FAQPage = () => {
  let FAQ = [
    {
      qsn: "How can I reach there ?",
      ans: "Ans 1 lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      qsn: "How can I reach there ?",
      ans: "AQ lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      qsn: "How can I reach there ?",
      ans: "A# lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      qsn: "How can I reach there ?",
      ans: "A4 lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      qsn: "How can I reach there ?",
      ans: "A5  lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      qsn: "How can I reach there ?",
      ans: "A6lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
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
