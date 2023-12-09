import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export interface CardProps {
  text: string;
  img: string;
}

export default function Card({ text, img }: CardProps) {
  return (
    <div className="flex flex-col bg-base-300 rounded-xl w-80 py-8 justify-center border border-primary/50 shadow-xl shadow-primary/10">
      <div className="flex flex-col gap-10 items-center grow justify-center">
        <Image
          style={{
            pointerEvents: "none",
            userSelect: "none",
          }}
          src={img}
          alt="Question image"
          width={200}
          height={200}
          className="rounded-xl aspect-square object-cover"
          priority
        ></Image>
        <Balancer className="text-base-content text-lg font-medium text-center select-none p-4">
          {text}
        </Balancer>
      </div>
    </div>
  );
}
