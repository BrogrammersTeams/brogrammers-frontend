import { useState } from "react";

import { QuizArr } from "./defaultQuestions";

import QuizModal from "./QuizModal";

const Quiz = ({ setbadgesArray, quizInfo, setShowMainQuiz }) => {
  let [title, settitle] = useState("");
  let [showQuizModal, setshowQuizModal] = useState(false);

  const handleClick = (title) => {
    settitle(title.toLowerCase());
    setshowQuizModal(true);
  };

  return (
    <div>
      <div className="w-full bg-green-5 h-ful flex items-center justify-center">
        {" "}
        <div className="grid p-2 bg-gray-50 rounded-lg  w-5/6 h-auto text-left items-start">
          <h1 className="my-1 font-extrabold text-gray-600 text-2xl text-justify">
            Web Development
          </h1>
          <div className=" grid grid-rows-6 text-left ">
            {quizInfo?.topics?.map((eachButton) => (
              <div key={Math.random().toString()}>
                <button
                  onClick={() => handleClick(eachButton)}
                  className="text-left float-left font-bold bg-cyan-300 px-6 py-1 mt-2 text-white hover:bg-cyan-500  rounded-lg w-auto"
                >
                  {eachButton}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showQuizModal && (
        <QuizModal
          setShowMainQuiz={setShowMainQuiz}
          setshowQuizModal={setshowQuizModal}
          setbadgesArray={setbadgesArray}
          QuizArray={QuizArr[title]}
          title={title}
        />
      )}
    </div>
  );
};

export default Quiz;
