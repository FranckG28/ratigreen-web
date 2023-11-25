import React from 'react'
import Image from 'next/image';

export interface CardProps {
    text: string;
    img: string;
}

export default function Card({ text, img }: CardProps) {
  return (
    <div className='flex flex-col bg-white rounded-xl w-80 h-96 justify-center shadow-pinkCardShadow'>
        <div className='flex flex-col gap-10 items-center grow justify-center'>
            <Image style={{pointerEvents : 'none', userSelect: 'none', width: '50', height: '50'}} src={img} alt="Hey" width={200} height={200}  ></Image>
            <p className='text-primaryColor text-lg font-bold text-center select-none p-4'>{text}</p>
        </div>
        <Image className="self-end m-2" style={{pointerEvents : 'none', userSelect: 'none', width: 100, height: 30}} src="/ratisexe-dard.svg" alt="Hey" width={100} height={30}></Image>
    </div>

  )
}
