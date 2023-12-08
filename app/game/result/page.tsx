"use client";

import Answer from "@/app/components/Answer";
import { GameContext } from "@/app/providers/GameProvider";
import { useContext } from "react";
import backToGame from "./back-to-game.action";

export default function ResultPage() {
  const { questions, actualQuestion, lastAnswer } = useContext(GameContext);

  const currentQuestion = questions[actualQuestion];

  return (
    <Answer
      answerUser={lastAnswer}
      img={
        process.env.NEXT_PUBLIC_API_URL_IMAGE + `${currentQuestion.imageUrl}`
      }
      question={currentQuestion}
      nextQuestion={() => {
        backToGame();
      }}
    />
  );
}
