import React from 'react'

interface ProgressBarProps {
    color: string;
    value: number;
}

/**
 * @description Mapping the color names to the tailwind classes
 */
const colorClasses: { [key: string]: string } = {
    progressBlue: 'bg-progressBlue',
    yellowColor: 'bg-yellowColor',
}

export default function ProgressBar({ color, value }: ProgressBarProps) {
  return (
    <div className={"border-4 rounded-full p-2"} style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
      <div className={`h-2 ${colorClasses[color]} rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
  )
}