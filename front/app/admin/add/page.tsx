"use client"

import { addQuestionAction } from '@/app/actions/add-question.action';
import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image'
import { Indicator } from '@/app/models/indicator';
import Button from '@/app/components/Button';

function getIndicatorImage(indicator: Indicator): string {
  switch (indicator) {
    case Indicator.MONEY:
      return "/coins-hand.svg";
    case Indicator.ENJOYMENT:
      return "/activity-heart.svg";
    case Indicator.HAPPY:
      return "/face-happy.svg";
    default:
      return ""; // return a default image or an empty string
  }
}

export default function CreateQuestion() {

  const [isAnswerFirstChoice, setIsAnswerFirstChoice] = useState<boolean>(true);
  const onAnswerFirstChoice = () => {
    setIsAnswerFirstChoice(!isAnswerFirstChoice);
  }

  const onAddQuestion = (formData: FormData) => {
    const answer : string = isAnswerFirstChoice ? formData.get("choices[0].text") as string : formData.get("choices[1].text") as string;
    formData.append("answer", answer);

    addQuestionAction(formData);
  }

  return (
    <main className='flex flex-col m-10 gap-2 lg:gap-5'>
        <div className='flex flex-col lg:flex-row max-lg:gap-4 max-lg:items-center'>
            <Link href="/" className='hover:bg-hoverColor cursor-pointer p-2 rounded-lg'>
                <Image src="/ratisexe_logo.svg"
                    alt="Ratisexe Logo"
                    style={{ width: 140, height: 40 }}
                    width={140}
                    height={40}>        
                </Image>
            </Link>   
        </div>
        <h1 className="text-3xl font-bold">Ajouter une question</h1>

        <form className="grid lg:grid-cols-2 gap-x-8 lg:gap-y-8 gap-y-2" action={onAddQuestion}>
          <div className='flex flex-col gap-2 h-36'>
            <h2 className='text-2xl opacity-80 font-bold'>QUESTION</h2>
            <textarea style={{ resize: 'none' }} name="question" className='rounded-2xl bg-pinkColor p-4 h-full' defaultValue="Est-ce que le VIH est une maladie ?" required></textarea>
          </div>

          <div className='self-center place-self-center w-1/2'>
              <Button text="Ajouter" type="submit" />
          </div>

          <div className=' bg-progressBlue h-500 rounded-2xl'>
            <div className='flex flex-col gap-2 p-5'>
              <h1 className='text-2xl opacity-80 font-bold uppercase'>Premier choix</h1>
              <div>
                <h2 className='text-lg opacity-80 font-bold uppercase'>Réponse</h2>
                <textarea style={{ resize: 'none' }} name="choices[0].text" className='rounded-2xl bg-white h-24 p-4 text-black w-full' required defaultValue="Oui, c'est une maladie grave." ></textarea>
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
                            name={ 'choices[0].indicator['+index+']' }
                            className='font-bold text-2xl border-2 rounded-lg lg:w-full bg-transparent text-center border-transparent'
                          />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className='flex gap-5 items-center'>
                <h2 className='text-lg opacity-80 font-bold uppercase'>Est-ce la bonne réponse ?</h2> 
                <input type='radio' name='isAnswerFirstChoice' checked={isAnswerFirstChoice} readOnly onClick={() => onAnswerFirstChoice()} className='w-6 h-6'></input>
              </div> 
            </div>
          </div>
            
          <div className=' bg-progressBlue h-500 rounded-2xl'>
            <div className='flex flex-col gap-2 p-5'>
              <h1 className='text-2xl opacity-80 font-bold uppercase'>Deuxième choix</h1>
              <div>
                <h2 className='text-lg opacity-80 font-bold uppercase'>Réponse</h2>
                <textarea style={{ resize: 'none' }} name="choices[1].text" className='rounded-2xl bg-white h-24 p-4 text-black w-full' required defaultValue="Ahhh non, qu’elle s’attelle à la tâche !" ></textarea>
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
                            name={ 'choices[1].indicator['+index+']' }
                            className='font-bold text-2xl border-2 rounded-lg lg:w-full bg-transparent text-center border-transparent'
                          />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className='flex gap-5 items-center'>
                <h2 className='text-lg opacity-80 font-bold uppercase'>Est-ce la bonne réponse ?</h2> 
                <input type='radio' name='isAnswerSecondChoice' checked={!isAnswerFirstChoice} readOnly onClick={() => onAnswerFirstChoice()} className='w-6 h-6'></input>
              </div> 
            </div>
          </div>
        </form>
    </main>
  );
}
