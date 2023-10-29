import React from 'react'
import Image from 'next/image';

export interface ChoiceProps {
    text: string;
    img: string;
}

export default function Choice({ text, img }: ChoiceProps) {
  return (
    <div className='flex flex-col gap-4 items-center rounded-lg p-4 hover:bg-hoverColor cursor-pointer'>
        <Image src={img} alt="Arrow" width={60} height={60}></Image>
        <p className='text-lg font-bold text-center opacity-50'>{text}</p>
    </div>
  )
}
