"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import Choice from "./Choice";
import TinderCard from "react-tinder-card";

export interface QuestionProps {
  img: string;
  question: string;
  onChoice: (answer: boolean) => void;
}

export default function Question({
  img,
  question,
  onChoice,
}: QuestionProps) {
  const LEFT_SWIPE = "left";
  const RIGHT_SWIPE = "right";

  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const onSwipe = (direction: any) => {
    if (direction === LEFT_SWIPE) onChoice(true);
    else if (direction === RIGHT_SWIPE) onChoice(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {windowWidth > 768 ? (
        // Render layout for screens larger than 1024px
        <div className="self-center flex flex-row items-center gap-10">
          <Choice
            text="Vrai"
            img="/left-arrow.svg"
            click={() => onChoice(true)}
          />
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
          <Choice
            text="Faux"
            click={() => onChoice(false)}
            img="/right-arrow.svg"
          />
        </div>
      ) : (
        // Render layout for screens smaller or equal to 1024px
        <div className="self-center flex flex-col items-center gap-4">
          <div className="flex justify-around">
            <Choice
              text="Vrai"
              click={() => onChoice(true)}
              img="/left-arrow.svg"
            />
            <Choice
              text="Faux"
              click={() => onChoice(false)}
              img="/right-arrow.svg"
            />
          </div>
          <div draggable="true">
            <Card img={img} text={question} />
          </div>
        </div>
      )}

      <p className="text-center font-bold text-base-content/60">
        {" "}
        Swipez ou cliquez pour faire votre choix !
      </p>
    </div>
  );
}
