import { useState } from "react";

import Quiz from "./Quiz";

const Container = () => {
  let [badgesArray, setbadgesArray] = useState([]);

  let [dataForQuiz, setdataForQuiz] = useState({
    frontend: {
      title: "Web Development",
      topics: ["Html", "Css", "Javascript", "Reactjs", "Nextjs"],
    },
    backend: {
      title: "Backend Development",
      topics: ["Nodejs", "Expressjs", "Django", "DSA"],
    },
  });

  let [quizSelection, setquizSelection] = useState("");
  let [showQuiz, setshowQuiz] = useState(false);

  const handleStart = (title) => {
    setquizSelection(title);
    setshowQuiz(true);
    console.log(dataForQuiz[quizSelection]);
  };

  return (
    <div className="w-full h-screen ">
      <div className="w-full flex py-1">
        <div className="w-auto px-2">
          <button
            className="w-auto bg-white px-6 py-2 mx-2 rounded-md font-black duration-300 text-green-500 hover:border-green-700 hover:text-green-700 hover:bg-green-100 "
            onClick={() => {}}
          >
            Badges
          </button>
        </div>
        <div className="w-full pr-2  ">
          <div className="bg-green-100 h-full flex p-2 rounded-lg">
            {badgesArray.map((eachBadge) => (
              <button
                style={{ border: "1px solid" }}
                key={Math.random()}
                className="w-auto  bg-yellow-50 px-6 py-1 text-sm  rounded-lg font-black duration-300 text-amber-700 hover:border-amber-700 hover:text-amber-700 hover:bg-amber-50 "
                onClick={() => {}}
              >
                {eachBadge}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="px-2 flex items-center justify-center w-full h-1/2">
        <div className="w-full bg-gray-50 border-transparent drop-shadow-sm mx-2 h-auto rounded-lg text-black hover:border-blue-300 border-2 duration-200 p-2">
          <h1 className="my-1   font-black text-gray-700 text-2xl text-justify">
            Frontend
          </h1>
          <p className="my-1  font-black text-gray-500  text-justify text-sm">
            It contains all frontend related topics
          </p>
          <button
            onClick={() => {
              handleStart("frontend");
            }}
            className="w-auto mt-2 bg-white px-8 py-1  rounded-md font-black duration-300 text-blue-500 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100 "
          >
            Start
          </button>
        </div>
        <div className="w-full bg-gray-50 border-transparent drop-shadow-sm mx-2 h-auto rounded-lg text-black hover:border-blue-300 border-2 duration-200 p-2">
          <h1 className="my-1   font-black text-gray-700 text-2xl text-justify">
            Backend
          </h1>
          <p className="my-1  font-black text-gray-500  text-justify text-sm">
            It contains all Backend related topics
          </p>
          <button
            onClick={() => {
              handleStart("backend");
            }}
            className="w-auto mt-2 bg-white px-8 py-1  rounded-md font-black duration-300 text-blue-500 hover:border-blue-700 hover:text-blue-700 hover:bg-blue-100 "
          >
            Start
          </button>
        </div>
      </div>
      {showQuiz && (
        <Quiz
          setShowMainQuiz={setshowQuiz}
          quizInfo={dataForQuiz[quizSelection]}
          setbadgesArray={setbadgesArray}
        />
      )}
    </div>
  );
};

export default Container;
