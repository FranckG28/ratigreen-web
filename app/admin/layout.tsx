import Link from "next/link"
import Image from "next/image"

export default function AdminLayout({
    children, 
  }: {
    children: React.ReactNode
  })  {
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
        {children}
    </main>
  )
}
