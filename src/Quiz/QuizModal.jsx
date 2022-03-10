import { useState } from "react";

const QuizModal = ({
  QuizArray,
  title,
  setbadgesArray,
  setshowQuizModal,
  setShowMainQuiz,
}) => {
  let [playerChoice, setplayerChoice] = useState();
  let [playerScore, setplayerScore] = useState(0);

  let [buttonTitle, setbuttonTitle] = useState("Next");
  let [quizArray, setquizArray] = useState(QuizArray || quizArray);
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  let [clickedStyles, setClickedStyles] = useState({
    transform: "scale(1.01)",
    borderColor: "transparent",
    backgroundColor: "lightgreen",
  });

  const isLastQuestion = () => currentQuestionIndex == quizArray.length - 1;
  const choiceIsCorrect = () =>
    playerChoice == quizArray[currentQuestionIndex].answer;

  const handleButtonClick = (e) => setplayerChoice(e.target.name);
  const handleSubmit = () =>
    playerScore >= (3 % quizArray.length) - 1
      ? setbadgesArray((peviousBadges) => [...peviousBadges, title])
      : "";

  const nextQuestion = () => {
    if (isLastQuestion()) {
      if (choiceIsCorrect()) setplayerScore((prev) => prev + 1);
    }
    if (choiceIsCorrect()) setplayerScore((prev) => prev + 1);

    if (true) {
      setCurrentQuestionIndex((prevIdx) => prevIdx + 1);
      setplayerChoice(undefined);
    }

    if (isLastQuestion()) {
      setShowMainQuiz(false);
      setshowQuizModal(false);
    }

    if (currentQuestionIndex == quizArray.length - 2) setbuttonTitle("Submit");
    if (buttonTitle == "Submit") handleSubmit();
  };

  return (
    <div className="mt-2 flex flex-col text-left w-full h-auto items-center justify-center">
      <div className="w-5/6 relative ">
        <div className="flex">
          <div className="text-xl mb-4 w-full font-extrabold text-gray-500">
            Q{currentQuestionIndex + 1} {"|"}{" "}
            {quizArray[currentQuestionIndex].question}
          </div>
          <h2 className="text-xl font-extrabold w-full text-right text-xl mb-4 w-full font-extrabold text-gray-500">
            {" "}
            {"Score :" + playerScore + "/" + quizArray.length}
          </h2>
        </div>
        <button
          name="0"
          onClick={handleButtonClick}
          className="w-full bg-green-50 rounded-lg duration-200  mt-1 font-extrabold text-left py-2 px-6 text-gray-400 hover:bg-green-200 hover:text-gray-700"
          style={playerChoice == 0 ? clickedStyles : {}}
        >
          {quizArray[currentQuestionIndex].options[0]}
        </button>
        <button
          name="1"
          onClick={handleButtonClick}
          className="w-full bg-green-50 rounded-lg duration-200  mt-1 font-extrabold text-left py-2 px-6 text-gray-400 hover:bg-green-200 hover:text-gray-700"
          style={playerChoice == 1 ? clickedStyles : {}}
        >
          {quizArray[currentQuestionIndex].options[1]}
        </button>
        <button
          name="2"
          onClick={handleButtonClick}
          className="w-full bg-green-50 rounded-lg duration-200  mt-1 font-extrabold text-left py-2 px-6 text-gray-400 hover:bg-green-200 hover:text-gray-700"
          style={playerChoice == 2 ? clickedStyles : {}}
        >
          {quizArray[currentQuestionIndex].options[2]}
        </button>
        <button
          name="3"
          onClick={handleButtonClick}
          className="w-full bg-green-50 rounded-lg duration-200  mt-1 font-extrabold text-left py-2 px-6 text-gray-400 hover:bg-green-200 hover:text-gray-700"
          style={playerChoice == 3 ? clickedStyles : {}}
        >
          {quizArray[currentQuestionIndex].options[3]}
        </button>

        <div className="w-full flex items-end justify-end">
          <button
            onClick={nextQuestion}
            className="w-auto mt-2 bg-white px-8 py-1   rounded-md font-black duration-300 text-green-500 text-2xl hover:border-green-700 hover:text-green-700 hover:bg-green-100 "
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
