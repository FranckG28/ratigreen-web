"use client";

import React from "react";
import Card from "./Card";
import Choice from "./Choice";
import TinderCard from "react-tinder-card";
import Image from "next/image";

export interface QuestionProps {
  img: string;
  question: string;
  onChoice: (answer: boolean) => void;
}

export default function Question({ img, question, onChoice }: QuestionProps) {
  const LEFT_SWIPE = "left";
  const RIGHT_SWIPE = "right";

  const onSwipe = (direction: any) => {
    if (direction === LEFT_SWIPE) onChoice(true);
    else if (direction === RIGHT_SWIPE) onChoice(false);
  };

  return (
    <div className="flex flex-col gap-8 place-content-center">
      <div className="self-center flex flex-row items-center gap-6">
        <Choice click={() => onChoice(true)}>
          <Image
            src="/left-arrow.svg"
            alt="Arrow"
            width={20}
            height={20}
          ></Image>
          <p>Vrai</p>
        </Choice>
        <div>
          <TinderCard
            onSwipe={(direction) => {
              onSwipe(direction);
            }}
            preventSwipe={["up", "down"]}
            swipeRequirementType="position"
            swipeThreshold={window.innerWidth * 0.15}
          >
            <Card img={img} text={question} />
          </TinderCard>
        </div>
        <Choice click={() => onChoice(false)}>
          <p>Faux</p>
          <Image
            src="/right-arrow.svg"
            alt="Arrow"
            width={20}
            height={20}
          ></Image>
        </Choice>
      </div>

      <p className="text-center text-base-content/60">
        {" "}
        Swipez à gauche pour répondre vrai, à droite pour répondre faux.
      </p>
    </div>
  );
}
