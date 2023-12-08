"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Question as QuestionModel } from "../models/question.model";
import { ThemeContext } from "./ThemeProvider";

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
  setPoints: () => { },
  setActualQuestion: () => { },
  setLastAnwser: () => { },
});

export default function GameProvider({
  children,
  questions,
}: {
  children: React.ReactNode;
  questions: QuestionModel[];
}) {
  const [points, setPoints] = useState<number>(0);
  const [actualQuestion, setActualQuestion] = useState<number>(0);
  const [lastAnswer, setLastAnwser] = useState<boolean>(false);

  const { setTheme } = useContext(ThemeContext);

  const themesPoints = [
    "sunset",
    "forest",
    "halloween",
    "aqua",
    "synthwave",
    "business",
    "cyberpunk",
    "night",
    "coffee",
  ];

  useEffect(() => {
    const theme = themesPoints.at(points % themesPoints.length);
    setTheme(theme as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

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
