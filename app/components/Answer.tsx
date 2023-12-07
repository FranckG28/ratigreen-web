import React from "react";
import Image from "next/image";
import IndicatorResult from "./IndicatorResult";
import ProgressBar from "./ProgressBar";
import { Question } from "../models/question";
import { Choice } from "../models/choice";
import { getIndicatorImage } from "../utility/indicator-image-path";

export interface ResultProps {
  img: string;
  question: Question;
  choice: Choice;
  nextQuestion: () => void;
}

export default function Answer({
  img,
  question,
  choice,
  nextQuestion,
}: ResultProps) {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-28 gap-10">
      <div className="flex flex-col lg:w-1/2 gap-5">
        <h1 className="opacity-60 font-bold text-2xl uppercase">Résultats</h1>
        <div className="flex flex-col bg-white rounded-xl justify-center shadow-pinkCardShadow">
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
            <p className="text-primaryColor text-lg font-bold text-center select-none">
              {question.title}
            </p>
          </div>
        </div>
        <div>
          <h2 className="opacity-60 font-bold text-lg uppercase">
            Vous avez choisis
          </h2>
          <p className="font-bold text-1xl">{choice.text}</p>
        </div>
        <div>
          <h2 className="opacity-60 font-bold text-lg uppercase">
            Effets sur vos indicateurs
          </h2>
          <div className="mt-2 flex gap-12">
            {choice.indicatorCoefficients.map((ic) => (
              <IndicatorResult
                key={ic.indicator}
                img={getIndicatorImage(ic.indicator)}
                symbol={ic.coefficient > 0 ? "+" : "-"}
                value={Math.abs(ic.coefficient)}
              />
            ))}
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
        <div className="flex flex-col bg-white rounded-xl h-3/4 justify-center shadow-pinkCardShadow">
          <div className="flex flex-row gap-10 items-center grow justify-center">
            <p className="text-primaryColor text-lg font-bold text-center p-10">
              {question.answer}
            </p>
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
