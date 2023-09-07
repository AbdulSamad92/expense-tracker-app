import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 ${inter.className}`}
    >
    <div className='flex'>
        <h1>Contact</h1>
      </div>  
    </main>
  )
}