import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { Question } from "../models/question.model";
import Message from "./Message";
import Balancer from "react-wrap-balancer";
import Badge from "./Badge";
export interface ResultProps {
  img: string;
  answerUser: boolean;
  question: Question;
  nextQuestion: () => void;
}

export default function Answer({
  img,
  question,
  answerUser,
  nextQuestion,
}: ResultProps) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="opacity-60 font-bold text-2xl uppercase">Résultats</h1>

      <div className="flex flex-row gap-6 p-4 bg-base-300 rounded-xl justify-center shadow-xl shadow-primary/10 items-center border border-primary/50">
        <Image
          style={{
            pointerEvents: "none",
            userSelect: "none",
            width: "auto",
            height: "auto",
          }}
          src={img}
          alt="Hey"
          width={100}
          height={100}
          className="rounded-xl"
        ></Image>
        <p className="text-base-content text-lg font-bold text-left select-none">
          {question.title}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p>
          Vous avez répondu{" "}
          <span className="font-medium">{answerUser ? "Vrai" : "Faux"}</span>.
        </p>
        <div>
          {answerUser === question.answer ? (
            <Badge className="bg-success text-success-content shadow-xl shadow-success/10">
              C'est une bonne réponse !
            </Badge>
          ) : (
            <Badge className="bg-error text-error-content shadow-xl shadow-error/10">
              Mauvaise réponse ! C'est{" "}
              <span className="font-bold">
                {question.answer ? "Vrai" : "Faux"}
              </span>
            </Badge>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg uppercase opacity-60">Les données</h2>
        <h3 className="text-4xl font-bold">{question.datas[0].value}</h3>
        <Balancer className="font-medium text-lg leading-snug">
          {question.datas[0].answer}
        </Balancer>
        <Balancer className="text-base-content">
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

      <button
        type="button"
        className="btn btn-primary self-end"
        onClick={nextQuestion}
      >
        Tour suivant
      </button>
    </div>
  );
}
