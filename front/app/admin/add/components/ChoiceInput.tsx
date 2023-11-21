import { Indicator } from '@/app/models/indicator';
import React from 'react'
import Image from 'next/image';
import { getIndicatorImage } from '@/app/utility/indicator-image-path';

export interface ChoiceInputProps {
    indexChoice: number;
    isAnswer: boolean;
    choiceTitle: string;
    onRadioClickIsAnswer: () => void;
}

export default function ChoiceInput({ indexChoice, isAnswer, onRadioClickIsAnswer, choiceTitle }: ChoiceInputProps) {
  return (
    <div className=' bg-progressBlue h-500 rounded-2xl'>
      <div className='flex flex-col gap-2 p-5'>
        <h1 className='text-2xl opacity-80 font-bold uppercase'>{choiceTitle}</h1>
        <div>
          <h2 className='text-lg opacity-80 font-bold uppercase'>Réponse</h2>
          <textarea style={{ resize: 'none' }} name={`choices[${indexChoice}].text`} className='rounded-2xl bg-white h-24 p-4 text-black w-full' required defaultValue="Oui, c'est une maladie grave." ></textarea>
        </div>
        
        <div>
          <h2 className='text-lg opacity-80 font-bold uppercase'>Effets sur les indicateurs</h2>
          <div className='mt-2 flex lg:gap-12 flex-col lg:flex-row'>
            {Object.values(Indicator).map((indicator, index) => {
                return (
                  <div className='flex gap-2' key={index}>
                    <Image src={getIndicatorImage(indicator)} alt="Arrow" width={30} height={30} style={{width: 30, height: 30}}></Image>
                    <input 
                      type='number' 
                      min="-100"
                      max="100"
                      defaultValue="0"
                      name={ 'choices['+{indexChoice}+'].indicator['+index+']' }
                      className='font-bold text-2xl border-2 rounded-lg lg:w-full bg-transparent lg:text-center border-transparent'
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className='flex gap-5 items-center'>
          <h2 className='text-lg opacity-80 font-bold uppercase'>Est-ce la bonne réponse ?</h2> 
          <input type='radio' name='isAnswerFirstChoice' checked={isAnswer} readOnly onClick={() => onRadioClickIsAnswer()} className='w-6 h-6'></input>
        </div> 
      </div>
    </div>
  )
}
