'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import IndicatorProgress from '../components/IndicatorProgress';
import Question from '../components/Question';
import Answer from '../components/Answer';

export default function Game() {

  const [isResultPage, setIsResultPage] = useState(false); 

  const [choice, setChoice] = useState(''); // ['left', 'right']

  const onChoice = (choice: any) => {
    console.log("Choice: " + choice);
    setIsResultPage(true);
    setChoice(choice);
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
                <IndicatorProgress icon="/coins-hand.svg" color="progressBlue" value={75} />
                <IndicatorProgress icon="/activity-heart.svg" color="yellowColor" value={30} />
                <IndicatorProgress icon="/face-happy.svg" color="progressBlue" value={50} />
            </div>
            <div className='max-xl:hidden' style={{width: '160px'}}></div> {/* To center my grow dir */}
        </div>
        <p className='bg-pinkColor w-24 h-30 rounded-full p-2 text-center font-bold self-center'>JOUR 1</p>


        {isResultPage 
            ? ( <Answer choice={choice} img="/preservatifs.jpg" question='Nous avons pas de préservatif, que faire?' /> 
            ) : (<Question 
                img="/preservatifs.jpg" 
                question='Nous avons pas de préservatif, que faire?' 
                leftChoice='Je luis dis de pratiquer une pénétration anale'
                rightChoice="Nous utilisons nos mains pour nous donner du plaisir réciproque"
                onChoice={onChoice} />
            )
        }
    </main>
  )
}
