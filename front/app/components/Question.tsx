'use client'

import React, { useEffect, useState } from 'react'
import Card from './Card';
import Choice from './Choice';
import TinderCard from 'react-tinder-card'
import { Choice as ChoiceModel } from '../models/choice';

export interface QuestionProps {
    img: string;
    question: string;
    leftChoice: ChoiceModel;
    rightChoice: ChoiceModel;
    onChoice: (choice: ChoiceModel) => void
}

export default function Question({ img, question, leftChoice, rightChoice, onChoice }: QuestionProps) {

  const LEFT_SWIPE = "left";
  const RIGHT_SWIPE = "right";

  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const onSwipe = (direction: any) => {
    if(direction === LEFT_SWIPE) onChoice(leftChoice);
    else if(direction === RIGHT_SWIPE) onChoice(rightChoice); 
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
        {windowWidth > 768 ? ( 
            // Render layout for screens larger than 1024px
        <div className="self-center flex flex-row items-center gap-10">
          <Choice text={leftChoice.text} img="/left-arrow.svg" click={() => onChoice(leftChoice)}/>
          <div>
            <TinderCard onSwipe={(direction) => {onSwipe(direction)}} preventSwipe={['up', 'down']}    
                swipeRequirementType="position"
                swipeThreshold={window.innerWidth * 0.15}>
              <Card img={img} text={question} />
            </TinderCard>
          </div>
          <Choice text={rightChoice.text} click={() => onChoice(rightChoice)} img="/right-arrow.svg"/>
        </div>
      ) : (
        // Render layout for screens smaller or equal to 1024px
        <div className="self-center flex flex-col items-center gap-4">
          <div className='flex justify-around'>
            <Choice text={leftChoice.text} click={() => onChoice(leftChoice)} img="/left-arrow.svg" />
            <Choice text={rightChoice.text} click={() => onChoice(rightChoice)} img="/right-arrow.svg" />
          </div>
          <div draggable="true">
            <Card img={img} text={question} />
          </div>
        </div>
      )}

        <p className='text-center font-bold opacity-60 '> Swipez ou cliquez pour faire votre choix !</p>
    </>
  )
}
