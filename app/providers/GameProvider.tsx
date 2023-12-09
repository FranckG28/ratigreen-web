"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Question as QuestionModel } from "../models/question.model";
import { ThemeContext } from "./ThemeProvider";
import Modal from "../components/Modal";
import classNames from "classnames";
import { redirect } from "next/navigation";
import { Theme } from "daisyui";

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

  const endGame = () => {
    setShowEndModal(false);
    setShowResult(false);
    setQuestionId(0);
    setPoints(0);
    setLastResult(false);

    redirect("/");
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
      <Modal isOpen={showEndModal}>
        <div className="flex flex-col gap-4 items-center py-8">
          <h1 className="text-lg font-bold">Partie terminée</h1>
          <h3
            className={classNames(
              points > 0 ? "text-error" : "text-success",
              "text-xl text-center font-medium"
            )}
          >
            {points > 0
              ? `Votre planète s'est réchauffée de ${points}°C. Dommage...`
              : `Votre planète s'est refroidie de ${points}°C. Bravo !`}
          </h3>
          <p className="text-base-content">
            Merci d&apos;avoir joué à Ratigreen !
          </p>
          <button type="button" className="btn btn-primary" onClick={endGame}>
            Retour à l&apos;accueil
          </button>
        </div>
      </Modal>
    </GameContext.Provider>
  );
}
