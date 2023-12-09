import React from "react";
import Image from "next/image";
import { Question } from "../models/question.model";
import Message from "./Message";
import Balancer from "react-wrap-balancer";
import Badge from "./Badge";
import Card from "./Card";
import useFormatNumber from "../hooks/useFormatNumber";

export interface ResultProps {
  img: string;
  answerUser: boolean;
  question: Question;
  nextQuestion: () => void;
}

function hightlightAnswerValue(answer: string, value: string) {
  const index = answer.indexOf(value);

  if (index == -1) {
    return <>{answer}</>;
  } else {
    const before = answer.slice(0, index) + " ";
    const after = answer.slice(index + value.length) + " ";
    return (
      <>
        {before}
        <span className="font-bold text-primary underline">{value}</span>
        {after}
      </>
    );
  }
}

export default function Answer({ img, question, answerUser }: ResultProps) {
  const value = useFormatNumber(question.datas[0].value);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="opacity-60 font-bold text-2xl uppercase">Résultats</h1>

      <Card>
        <div className="flex flex-row gap-6 p-4 justify-start items-center">
          <Image
            style={{
              pointerEvents: "none",
              userSelect: "none",
            }}
            src={img}
            alt="Hey"
            width={80}
            height={80}
            className="rounded-xl aspect-square object-cover"
          ></Image>
          <p className="text-base-content text-lg text-left select-none">
            {question.title}
          </p>
        </div>
      </Card>

      <div className="flex flex-col gap-4">
        <p>
          Vous avez répondu{" "}
          <span className="font-medium">{answerUser ? "Vrai" : "Faux"}</span>.
        </p>
        <div>
          {answerUser === question.answer ? (
            <Badge className="bg-success text-success-content shadow-xl shadow-success/10">
              C&apos;est une bonne réponse !
            </Badge>
          ) : (
            <Badge className="bg-error text-error-content shadow-xl shadow-error/10">
              Mauvaise réponse ! C&apos;est{" "}
              <span className="font-bold">
                {question.answer ? "Vrai" : "Faux"}
              </span>
            </Badge>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 relative">
        <h2 className="font-bold text-lg uppercase opacity-60">Les données</h2>
        <p className="text-6xl font-bold text-transparent top-10 absolute bg-clip-text bg-gradient-to-t from-primary/5 to-primary/80">
          {value}
        </p>
        <Balancer className="font-medium text-xl leading-snug z-10 mt-10">
          {hightlightAnswerValue(question.datas[0].answer, value)}
        </Balancer>
        <Balancer className="text-base-content font-light z-10">
          {question.datas[0].explanation}
        </Balancer>
      </div>

      {question.sources.length > 0 ? (
        <div className="flex flex-col gap-3">
          <h3 className="opacity-60 font-bold text-lg uppercase">Sources</h3>
          <div className="flex flex-col gap-2">
            {question.sources.map((source, index) => (
              <a
                key={index}
                href={source.link!}
                target="_blank"
                rel="noreferrer"
                className="link text-sm"
              >
                {source.name}
              </a>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}

      <Message question={question} />
    </div>
  );
}
