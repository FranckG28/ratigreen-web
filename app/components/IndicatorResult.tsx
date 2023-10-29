import React from 'react'
import Image from 'next/image'

export interface IndicatorResultProps {
    img: string,
    symbol: string,
    value: string
}

export default function IndicatorResult({img, symbol, value}: IndicatorResultProps) {
  return (
    <div className='flex gap-2'>
        <Image src={img} alt="Arrow" width={30} height={30} style={{width: 30, height: 30}}></Image>
        <p className='font-bold text-2xl'>{symbol}{value}</p>
    </div>
  )
}
