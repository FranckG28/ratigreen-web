import React from "react";
import Image from "next/image";

export interface ChoiceProps {
  text: string;
  img: string;
  click: () => void;
}

export default function Choice({ text, img, click }: ChoiceProps) {
  return (
    <div
      onClick={click}
      className="flex flex-col gap-4 items-center rounded-lg p-4 transition hover:bg-base-300 cursor-pointer"
    >
      <Image
        src={img}
        alt="Arrow"
        width={60}
        height={60}
        style={{ width: 60, height: 60 }}
      ></Image>
      <p className="text-lg font-bold text-center text-base-content w-40">
        {text}
      </p>
    </div>
  );
}
