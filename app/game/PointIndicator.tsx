"use client";

import { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import classNames from "classnames";
import Balancer from "react-wrap-balancer";

const colors: string[] = [
  "text-success",
  "text-base-content",
  "text-warning",
  "text-error",
];

const messages: string[] = [
  "Votre planète va bien.",
  "Votre planète commence à se réchauffer!",
  "Il ne faudrait pas que votre planète ne se réchauffe plus que ça ...",
  "Il commence à faire chaud ici !",
];

export default function PointIndicators() {
  const { points } = useContext(GameContext);

  const index = Math.min(points, Object.keys(colors).length - 1);

  return (
    <>
      <p
        className={classNames("text-4xl font-bold text-center", colors[index])}
      >
        {points} °C
      </p>
      <Balancer className={"text-sm text-center"}>{messages[index]}</Balancer>
    </>
  );
}
