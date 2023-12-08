"use client";

import { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import Question from "../components/Question";
import { goToResult } from "./go-to-results.action";

export default function QuestionPage({}: {}) {
  const {
    questions,
    actualQuestion,
    setPoints,
    points,
    setActualQuestion,
    setLastAnwser,
  } = useContext(GameContext);

  if (!questions) {
    throw new Error("Questions not found");
  }

  const currentQuestion = questions[actualQuestion];

  const onChoice = (answerUser: boolean) => {
    if (answerUser) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }

    setLastAnwser(answerUser);
    setActualQuestion(actualQuestion + 1);

    goToResult();
  };

  return (
    <Question
      img={
        process.env.NEXT_PUBLIC_API_URL_IMAGE + `${currentQuestion.imageUrl}`
      }
      question={currentQuestion!.title}
      onChoice={onChoice}
    />
  );
}
