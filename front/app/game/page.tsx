'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import IndicatorProgress from '../components/IndicatorProgress';
import Answer from '../components/Answer';
import { getQuestions } from './get-questions.action';
import { Question as QuestionModel } from '../models/question';
import Question from '../components/Question';
import { Choice } from '../models/choice';
import { Indicator } from '../models/indicator';

export default function Game() {

  const [moneyProgress, setMoneyProgress] = useState(50);
  const [enjoymentProgress, setEnjoymentProgress] = useState(50);
  const [happyProgress, setHappyProgress] = useState(50);
  const [day, setDay] = useState(1);
  
  const [actualQuestion, setActualQuestion] = useState<QuestionModel | null>(null);
  const [questions, setQuestions] = useState<QuestionModel[] | null>(null);

  const nextQuestion = () => {
    setActualQuestion(questions![day]);
    setDay(prev => prev + 1);
    setIsResultPage(false);
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const result = await getQuestions();
      // randomize questions order
      result.sort(() => Math.random() - 0.5);
      console.log(result);
      setActualQuestion(result[0]);
      setQuestions(result);
    };

    fetchQuestions();
  }, []);

  const [isResultPage, setIsResultPage] = useState(false); 

  const [choice, setChoice] = useState<Choice>(); 

  const onChoice = (choice: Choice) => {
    setIsResultPage(true);
    setChoice(choice);

    // Update progress values based on choice
    choice.indicatorCoefficients.forEach((ic) => {
      switch (ic.indicator) {
        case Indicator.MONEY:
          setMoneyProgress(prev => prev + ic.coefficient);
          break;
        case Indicator.ENJOYMENT:
          setEnjoymentProgress(prev => prev + ic.coefficient);
          break;
        case Indicator.HAPPY:
          setHappyProgress(prev => prev + ic.coefficient);
          break;
        default:
          break;
      }
    });
  }

  return (
    <main className='flex flex-col m-10 gap-4 lg:gap-10'>
        <div className='flex flex-col lg:flex-row max-lg:gap-4 max-lg:items-center'>
            <Link href="/" className='hover:bg-hoverColor cursor-pointer p-2 rounded-lg'>
                <Image src="/ratisexe_logo.svg"
                    alt="Ratisexe Logo"
                    style={{ width: 140, height: 40 }}
                    width={140}
                    height={40}>        
                </Image>
            </Link>
            <div className='flex flex-col grow justify-center lg:flex-row  gap-4 lg:gap-6 items-center'>
              <IndicatorProgress icon="/coins-hand.svg" color="progressBlue" value={moneyProgress} />
              <IndicatorProgress icon="/activity-heart.svg" color="yellowColor" value={enjoymentProgress} />
              <IndicatorProgress icon="/face-happy.svg" color="progressBlue" value={happyProgress} />
            </div>
            <div className='max-xl:hidden' style={{width: '160px'}}></div> {/* To center my grow dir */}
        </div>
        <p className='bg-pinkColor w-24 h-30 rounded-full p-2 text-center font-bold self-center'>JOUR {day}</p>


        {actualQuestion && questions 
          ? (isResultPage 
            ? <Answer choice={choice!} img="/preservatifs.jpg" question={actualQuestion} nextQuestion={nextQuestion} /> 
            : <Question 
                img="/preservatifs.jpg" 
                question={actualQuestion!.title}
                leftChoice={actualQuestion.choices[0]}
                rightChoice={actualQuestion.choices[1]}
                onChoice={onChoice} />
            )
          : <p>Loading...</p>
        }
    </main>
  )
}
