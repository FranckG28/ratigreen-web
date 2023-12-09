"use client";

import React, { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import Answer from "../components/Answer";
import Question from "../components/Question";

export default function Game() {
  const { question, showResult, lastResult, nextQuestion, answer } =
    useContext(GameContext);

  if (!question) {
    throw new Error("Question not found");
  }

  if (showResult) {
    return (
      <Answer
        answerUser={lastResult}
        img={process.env.NEXT_PUBLIC_API_URL_IMAGE + `${question?.imageUrl}`}
        question={question}
        nextQuestion={nextQuestion}
      />
    );
  }

  return (
    <Question
      img={process.env.NEXT_PUBLIC_API_URL_IMAGE + `${question.imageUrl}`}
      question={question!.title}
      onChoice={answer}
    />
  );
}
