'use client'

import Image from 'next/image'
import Button from './components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col justify-between min-h-screen '>
      <Image className="self-end mr-8 mt-8" src="/music-note.svg" alt="Music note" width={30} height={30} />
      <div className="flex flex-col items-center justify-center gap-y-8">
      <div className="w-2/3 md:w-1/4">
          <Image style={{ width: 'auto', height: 'auto' }}
            src="/ratisexe_logo.svg" alt="RatiseXe Logo" width={400} height={130} priority/>
        </div>
       
        <p className="font-bold sm:w-1/2 md:w-2/6 p-2 text-center">
          Le jeu pour parfaire votre education sexuelle. Faites les meilleurs choix afin de continuer l&apos;aventure le plus longtemps possible !
        </p>
        <Link href="/question">
            <Button text="Démarrer" onClick={() => {}} />
        </Link>
      </div>
      <p className="self-end mr-8 mb-8">Ratiscrum V2</p>
    </main>
  )
}
