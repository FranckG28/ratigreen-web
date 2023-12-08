"use client";

import { useContext } from "react";
import { GameContext } from "../providers/GameProvider";

export default function PointIndicators() {
  const { points } = useContext(GameContext);

  return <p className="text-3xl font-bold">{points} °C</p>;
}
