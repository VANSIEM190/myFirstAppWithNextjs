'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className=" h-screen flex flex-col gap-3 justify-center items-center">
        <Image src={'/hero.jpg'} alt="" width={200} height={200} />
        <h1 className="text-xl font-medium">Bienvenue Dans Nextjs</h1>

        <Link
          href="/contact"
          className="p-3 py-2 bg-blue-400 rounded-lg text-white"
        >
          Visiter notre application
        </Link>
      </div>
    </>
  )
}
