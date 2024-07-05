"use client";

// pages/index.js
import React from "react";
import QuizContainer from "../app/src/studentAssignments/QuizContainer";

const Home = () => {
  // Example quiz data
  const quizzes = [
    { id: 1, quizType: "Kahoot", isAnswered: false },
    { id: 2, quizType: "Crossword", isAnswered: false },
    { id: 3, quizType: "Multiple Choice", isAnswered: false },
    // Add more quizzes as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mt-8 mb-4">Welcome student!</h1>
      <h2 className="text-2xl font-semi-bold">Assignments</h2>
      {quizzes.map((quiz) => (
        <QuizContainer
          key={quiz.id} // Ensure each quiz has a unique key
          quizType={quiz.quizType}
          isAnswered={quiz.isAnswered}
        />
      ))}
    </div>
  );
};

export default Home;
