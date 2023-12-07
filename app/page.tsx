import Image from 'next/image'
import Button from './components/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col justify-between min-h-screen '>
      <div className="self-end mr-8 mt-8 flex gap-4" >
        <Link href="/admin">
          <Image src="/admin.svg" alt="Admin lock" width={30} height={30} className="transition-transform hover:scale-110 hover:opacity-80" />
        </Link>
        <Image  src="/music-note.svg" alt="Music note" width={30} height={30} />
      </div>
      <div className="flex flex-col items-center justify-center gap-y-8">
      <div className="w-2/3 md:w-1/4">
          <Image style={{ width: 'auto', height: 'auto' }}
            src="/ratisexe_logo.svg" alt="RatiseXe Logo" width={400} height={130} priority/>
        </div>
       
        <p className="font-bold sm:w-1/2 md:w-2/6 p-2 text-center">
          Le jeu pour parfaire votre education sexuelle. Faites les meilleurs choix afin de continuer l&apos;aventure le plus longtemps possible !
        </p>
        <Button href="/game" text="Démarrer" />
      </div>
      <Link href="https://www.ratiscrum.fr/" className='self-end'>
        <p className="mr-8 mb-8 font-bold opacity-50">Ratiscrum V2 🐀</p>
      </Link>
    </main>
  )
}
