import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar";
import { Question } from "../models/question.model";
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
          <p className="font-bold text-1xl">{answerUser}</p>
        </div>
        <div>
          <h2 className="opacity-60 font-bold text-lg uppercase">
            Effets sur vos indicateurs
          </h2>
          <div className="mt-2 flex gap-12">
            <p>ICI METTRE LA TERRE ?</p>
          </div>
        </div>
        <div>
          <h2 className="opacity-60 font-bold text-lg uppercase">
            Ce que les autres ont choisis
          </h2>
          <div className="mt-2 flex gap-4">
            <p className="font-bold text-2xl">65%</p>
            <div className="w-full">
              <ProgressBar value={65} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/2 gap-5 ">
        <h1 className="opacity-60 font-bold text-2xl uppercase">
          Commentaires
        </h1>
        <div className="flex flex-col bg-white rounded-xl h-3/4 justify-center shadow shadow-primary/50">
          <div className="flex flex-row gap-10 items-center grow justify-center">
            <div className="text-primary-content text-lg font-bold text-center p-10">
              {question.datas.map((data) => {
                return (
                  <div key={data.id}>
                    <p>Value: {data.value}</p>
                    <p>Answer: {data.answer}</p>
                    <p>Explanation: {data.explanation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
