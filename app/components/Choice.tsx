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
      className="flex flex-col gap-4 items-center rounded-lg p-4 transition hover:bg-base-300 cursor-pointer w-28"
    >
      <Image src={img} alt="Arrow" width={40} height={40}></Image>
      <p className="text-center text-base-content">{text}</p>
    </div>
  );
}
