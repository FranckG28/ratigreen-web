"use client";

import React, { useEffect, useState } from "react";
import IndicatorProgress from "../components/IndicatorProgress";
import Answer from "../components/Answer";
import { getQuestions } from "./get-questions.action";
import { Question as QuestionModel } from "../models/question";
import Question from "../components/Question";
import { Choice } from "../models/choice";
import { Indicator } from "../models/indicator";
import { Rat } from "lucide-react";
import Badge from "../components/Badge";

export default function Game() {
  const [moneyProgress, setMoneyProgress] = useState(50);
  const [enjoymentProgress, setEnjoymentProgress] = useState(50);
  const [happyProgress, setHappyProgress] = useState(50);
  const [day, setDay] = useState(1);

  const [actualQuestion, setActualQuestion] = useState<QuestionModel | null>(
    null
  );
  const [questions, setQuestions] = useState<QuestionModel[] | null>(null);

  const nextQuestion = () => {
    setActualQuestion(questions![day]);
    setDay((prev) => prev + 1);
    setIsResultPage(false);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const result = await getQuestions();
      // randomize questions order
      result.sort(() => Math.random() - 0.5);
      console.log(result);
      setActualQuestion(result[0]);
      setQuestions(result);
    };

    fetchQuestions();
  }, []);

  const [isResultPage, setIsResultPage] = useState(false);

  const [choice, setChoice] = useState<Choice>();

  const onChoice = (choice: Choice) => {
    setIsResultPage(true);
    setChoice(choice);

    // Update progress values based on choice
    choice.indicatorCoefficients.forEach((ic) => {
      switch (ic.indicator) {
        case Indicator.MONEY:
          setMoneyProgress((prev) => prev + ic.coefficient);
          break;
        case Indicator.ENJOYMENT:
          setEnjoymentProgress((prev) => prev + ic.coefficient);
          break;
        case Indicator.HAPPY:
          setHappyProgress((prev) => prev + ic.coefficient);
          break;
        default:
          break;
      }
    });
  };

  return (
    <main className="flex flex-col m-10 gap-4 lg:gap-10">
      <div className="flex flex-col lg:flex-row max-lg:gap-4 items-center justify-center">
        <div className="flex flex-col grow justify-center lg:flex-row gap-4 lg:gap-6 items-center">
          <IndicatorProgress value={moneyProgress}>
            <Rat></Rat>
          </IndicatorProgress>
          <IndicatorProgress value={enjoymentProgress}>
            <Rat></Rat>
          </IndicatorProgress>
          <IndicatorProgress value={happyProgress}>
            <Rat></Rat>
          </IndicatorProgress>
        </div>
        <div className="max-xl:hidden" style={{ width: "160px" }}></div>{" "}
        {/* To center my grow dir */}
      </div>
      <Badge>JOUR {day}</Badge>

      {actualQuestion && questions ? (
        isResultPage ? (
          <Answer
            choice={choice!}
            img={
              process.env.NEXT_PUBLIC_API_URL_IMAGE +
              `${actualQuestion.imageUrl}`
            }
            question={actualQuestion}
            nextQuestion={nextQuestion}
          />
        ) : (
          <Question
            img={
              process.env.NEXT_PUBLIC_API_URL_IMAGE +
              `${actualQuestion.imageUrl}`
            }
            question={actualQuestion!.title}
            leftChoice={actualQuestion.choices[0]}
            rightChoice={actualQuestion.choices[1]}
            onChoice={onChoice}
          />
        )
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
