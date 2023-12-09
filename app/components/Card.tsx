import classNames from "classnames";
import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        "flex flex-col bg-base-200 rounded-xl justify-center border border-primary/50 shadow-xl shadow-primary/10",
        className
      )}
    >
      {children}
    </div>
  );
}
