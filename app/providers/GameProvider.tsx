"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Question as QuestionModel } from "../models/question.model";
import { ThemeContext } from "./ThemeProvider";
import { Theme } from "daisyui";
import GameEnd from "../game/GameEnd";

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

const themes: Theme[] = [
  "forest",
  "valentine",
  "garden",
  "dracula",
  "coffee",
  "cyberpunk",
];

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

  const [showEndModal, setShowEndModal] = useState<boolean>(false);

  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const theme = themes[Math.min(Math.floor(points), themes.length - 1)];
    setTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [points]);

  const answer = (answer: boolean) => {
    if (answer !== question.answer) {
      setPoints(points + 1);
    } else if (points > 0) {
      setPoints(points - 0.5);
    }

    setLastResult(answer);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (questionId === questions.length - 1) {
      setShowEndModal(true);
      return;
    }

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
      <GameEnd isOpen={showEndModal} points={points} />
    </GameContext.Provider>
  );
}
