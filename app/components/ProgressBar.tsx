import React from 'react'
import Image from 'next/image';

interface ProgressBarProps {
    icon: string;
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

export default function ProgressBar({ icon, color, value }: ProgressBarProps) {
  return (
    <div>
        <div className="flex flex-row gap-2">
            <Image src={icon} alt="Icon" width={30} height={30} />
            <div className={"w-48 h-8 border-4 rounded-full p-2"} style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}>
              <div className={`h-2 ${colorClasses[color]} rounded-full`} style={{ width: `${value}%` }}></div>
            </div>
        </div>
    </div>
  )
}
