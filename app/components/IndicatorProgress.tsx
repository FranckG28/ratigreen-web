import React from "react";
import ProgressBar from "./ProgressBar";

interface IndicatorProgressProps {
  children: React.ReactNode;
  value: number;
}

export default function IndicatorProgress({
  children,
  value,
}: IndicatorProgressProps) {
  const maxPercent = 100;
  const minPercent = 0;

  return (
    <div className="flex flex-row gap-2">
      {children}
      <div className="w-48 h-8">
        <ProgressBar
          value={
            value > maxPercent
              ? maxPercent
              : value < minPercent
              ? minPercent
              : value
          }
        />
      </div>
    </div>
  );
}
