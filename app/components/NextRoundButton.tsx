"use client";

import { useContext } from "react";
import { GameContext } from "../providers/GameProvider";
import classNames from "classnames";

export default function NextRound({ className }: { className?: string }) {
  const { nextQuestion, showResult } = useContext(GameContext);

  if (showResult) {
    return (
      <button
        type="button"
        className={classNames(className, "btn btn-primary")}
        onClick={() => {
          if (typeof window !== "undefined")
            window.scrollTo({ top: 0, behavior: "smooth" });

          nextQuestion();
        }}
      >
        Tour suivant
      </button>
    );
  }

  return <></>;
}
