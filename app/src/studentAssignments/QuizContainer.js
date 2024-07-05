// components/QuizContainer.js
import React, { useState } from "react";

const QuizContainer = ({ quizType, isAnswered }) => {
  const [dynamicNumber, setDynamicNumber] = useState(1);

  const handleQuizOpen = () => {
    console.log(`Opening quiz number ${dynamicNumber}`);
    // Implement logic to open quiz number dynamicNumber
  };

  return (
    //Container for quiz
    <div className="px-50vw bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4 max-w-xs">
      <div //State circle (unswared or not)
        className={`py-2 px-2 rounded-full text-white ${
          isAnswered ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {isAnswered ? "Answered" : "Not Answered"}
      </div>
      <div className="text-lg font-bold mt-2 mb-2">
        MATH - Quiz - {dynamicNumber}
      </div>
      <div className="mb-2">
        <span className="font-bold">QUIZTYPE:</span> {quizType}
      </div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg max-h-xs"
        onClick={handleQuizOpen}
      >
        Open Quiz {dynamicNumber}
      </button>
    </div>
  );
};

export default QuizContainer;
