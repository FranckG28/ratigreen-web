import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { Question } from "../models/question.model";
import Planet from "./Planet";
import Message from "./Message";
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
    <div className="flex lg:flex-row flex-col lg:gap-28 gap-10">
      <div className="flex flex-col lg:w-1/2 gap-5">
        <h1 className="opacity-60 font-bold text-2xl uppercase">Résultats</h1>
        <div className="flex flex-col bg-white rounded-xl justify-center shadow shadow-primary/20">
          <div className="flex flex-row gap-10 items-center grow justify-center p-10">
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
            ></Image>
            <p className="text-primary-content text-lg font-bold text-center select-none">
              {question.title}
            </p>
          </div>
        </div>
        <div>
          <h2 className="opacity-60 font-bold text-lg uppercase">
            Vous avez choisis
          </h2>
          {answerUser ? (
            <p className="font-bold text-2xl">Vrai</p>
          ) : (
            <p className="font-bold text-2xl">Faux</p>
          )}
        </div>
        <div>
          <h2 className="opacity-60 font-bold text-lg uppercase">
            Les données
          </h2>
          <h3 className="font-bold ">
            {question.datas[0].value}</h3>
          <h3 className="font-bold ">
            {question.datas[0].answer}</h3><br/>
            <p className="text text">
            {question.datas[0].explanation}</p>
        </div>
        <Message question={question} />
      </div>

      <div className="flex flex-col lg:w-1/2 gap-5 ">
        <h1 className="opacity-60 font-bold text-2xl uppercase">
          La terre
        </h1>
        <Planet />
        
        <button
          type="button"
          className="btn btn-primary self-end"
          onClick={nextQuestion}
        >
          Tour suivant
        </button>
      </div>
    </div>
  );
}
