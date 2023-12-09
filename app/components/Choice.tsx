import React from "react";

export interface ChoiceProps {
  children: React.ReactNode;
  click: () => void;
}

export default function Choice({ children, click }: ChoiceProps) {
  return (
    <button
      onClick={click}
      className="btn btn-ghost max-lg:hidden text-base-content"
    >
      {children}
    </button>
  );
}
