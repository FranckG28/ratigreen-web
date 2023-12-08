"use client";

import { createContext, useState } from "react";
import { Question as QuestionModel } from "../models/question.model";

export const GameContext = createContext<{
  questions: QuestionModel[];
  actualQuestion: number;
  points: number;
  lastAnswer: boolean;
  setLastAnwser: (lastAnswer: boolean) => void;
  setPoints: (points: number) => void;
  setActualQuestion: (actualQuestion: number) => void;
}>({
  questions: [],
  actualQuestion: 0,
  points: 0,
  lastAnswer: false,
  setPoints: () => {},
  setActualQuestion: () => {},
  setLastAnwser: () => {},
});

export default function GameProvider({
  children,
  questions,
}: {
  children: React.ReactNode;
  questions: QuestionModel[];
}) {
  console.log("got questions ", questions);

  const [points, setPoints] = useState<number>(0);
  const [actualQuestion, setActualQuestion] = useState<number>(0);
  const [lastAnswer, setLastAnwser] = useState<boolean>(false);

  return (
    <GameContext.Provider
      value={{
        questions,
        actualQuestion,
        points,
        lastAnswer,
        setPoints,
        setActualQuestion,
        setLastAnwser,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
