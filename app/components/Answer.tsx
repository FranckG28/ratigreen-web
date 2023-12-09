import React from "react";
import Image from "next/image";
import { Question } from "../models/question.model";
import Message from "./Message";
import Balancer from "react-wrap-balancer";
import Badge from "./Badge";
import Card from "./Card";
import { Data } from "../models/data.model";
export interface ResultProps {
  img: string;
  answerUser: boolean;
  question: Question;
  nextQuestion: () => void;
}

function hightlightAnswerValue(data: Data) {
  const value = String(data.value);
  const answer = data.answer;

  const index = answer.indexOf(value);

  if (index == -1) {
    return (
      <>
        {answer}
      </>
    )
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
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-lg uppercase opacity-60">Les données</h2>
        <h3 className="text-4xl font-bold text-primary">{question.datas[0].value}</h3>
        <Balancer className="font-medium text-xl leading-snug">
          {hightlightAnswerValue(question.datas[0])}
        </Balancer>
        <Balancer className="text-base-content font-light">
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
