'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProgressBar from '../components/ProgressBar';
import Card from '../components/Card';
import Choice from '../components/Choice';
import TinderCard from 'react-tinder-card'

export default function Page() {

  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const onSwipe = (direction: any) => {
    console.log("Swipe: " + direction);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
                <ProgressBar icon="/coins-hand.svg" color="progressBlue" value={50} />
                <ProgressBar icon="/activity-heart.svg" color="yellowColor" value={50} />
                <ProgressBar icon="/face-happy.svg" color="progressBlue" value={50} />
            </div>
            <div className='max-xl:hidden' style={{width: '160px'}}></div> {/* To center my grow dir */}
        </div>
        <p className='bg-pinkColor w-24 h-30 rounded-full p-2 text-center font-bold self-center'>JOUR 1</p>


        {windowWidth > 768 ? ( 
            // Render layout for screens larger than 1024px
        <div className="self-center flex flex-row items-center gap-10">
          <Choice text="REFUSER" img="/left-arrow.svg" />
          <div>
            <TinderCard onSwipe={onSwipe} preventSwipe={['up', 'down']}    
                swipeRequirementType="position"
                swipeThreshold={window.innerWidth * 0.15}>
              <Card img="/preservatifs.jpg" text="Quel est le meilleur moyen de se protéger des IST ?" />
            </TinderCard>
          </div>
          <Choice text="ACCEPTER" img="/right-arrow.svg"/>
        </div>
      ) : (
        // Render layout for screens smaller or equal to 1024px
        <div className="self-center flex flex-col items-center gap-4">
          <div className='flex justify-around'>
            <Choice text="REFUSER" img="/left-arrow.svg" />
            <Choice text="ACCEPTER" img="/right-arrow.svg" />
          </div>
          <div draggable="true">
            <Card img="/preservatifs.jpg" text="Quel est le meilleur moyen de se protéger des IST ?" />
          </div>
        </div>
      )}

        <p className='text-center font-bold opacity-60 '> Swipez ou cliquez pour faire votre choix !</p>
    </main>
  )
}
