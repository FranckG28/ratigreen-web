import Link from "next/link"
import Image from "next/image"
import Ratilogo from "../components/Ratilogo"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex flex-col m-10 gap-2 lg:gap-5'>
      <div className='flex flex-col lg:flex-row max-lg:gap-4 max-lg:items-center'>
        <Link href="/" className='hover:bg-hoverColor cursor-pointer p-2 rounded-lg'>
        </Link>
      </div>
      {children}
    </main>
  )
}
