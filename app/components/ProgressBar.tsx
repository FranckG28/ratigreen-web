import React from 'react'

interface ProgressBarProps {
    value: number;
}

/**
 * @description Mapping the color names to the tailwind classes
 */
const colorClasses: { [key: string]: string } = {
    progressBlue: 'bg-progressBlue',
    yellowColor: 'bg-yellowColor',
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const colorClass = value < 50 ? 'bg-yellowColor' : 'bg-progressBlue';

  return (
    <div className={"border-4 rounded-full p-2"} style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
      <div className={`h-2 ${colorClass} rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
  )
}