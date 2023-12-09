"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Question as QuestionModel } from "../models/question.model";
import { ThemeContext } from "./ThemeProvider";

export const GameContext = createContext<{
  question?: QuestionModel;
  points: number;
  lastResult: boolean;
  showResult: boolean;
  answer: (answer: boolean) => void;
  nextQuestion: () => void;
}>({
  points: 0,
  lastResult: false,
  showResult: false,
  answer: (answer: boolean) => {},
  nextQuestion: () => {},
});

export default function GameProvider({
  children,
  questions,
}: {
  children: React.ReactNode;
  questions: QuestionModel[];
}) {
  const [points, setPoints] = useState<number>(0);
  const [questionId, setQuestionId] = useState<number>(0);
  const [lastResult, setLastResult] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

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

  const answer = (answer: boolean) => {
    if (answer) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }

    setLastResult(answer);
    setShowResult(true);
  };

  const nextQuestion = () => {
    setQuestionId(questionId + 1);
    setShowResult(false);
  };

  const question = questions[questionId];

  return (
    <GameContext.Provider
      value={{
        question,
        points,
        lastResult,
        showResult,
        answer,
        nextQuestion,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
