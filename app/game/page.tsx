"use client";

import React, { useContext } from "react";
import PointIndicators from "./PointIndicator";
import { GameContext } from "../providers/GameProvider";
import Answer from "../components/Answer";
import Question from "../components/Question";

export default function Game() {
  const { question, showResult, lastResult, nextQuestion, answer } =
    useContext(GameContext);

  if (!question) {
    throw new Error("Question not found");
  }

  return (
    <>
      <div className="lg:flex-row max-lg:gap-4 items-center justify-center">
        <div className="flex flex-col justify-center gap-y-4 mt-12 gap-4 lg:gap-16 items-center">
          <PointIndicators />

          {showResult ? (
            <Answer
              answerUser={lastResult}
              img={
                process.env.NEXT_PUBLIC_API_URL_IMAGE + `${question?.imageUrl}`
              }
              question={question}
              nextQuestion={nextQuestion}
            />
          ) : (
            <Question
              img={
                process.env.NEXT_PUBLIC_API_URL_IMAGE + `${question.imageUrl}`
              }
              question={question!.title}
              onChoice={answer}
            />
          )}
        </div>
        <div className="max-xl:hidden" style={{ width: "160px" }}></div>{" "}
        {/* To center my grow dir */}
      </div>
    </>
  );
}
