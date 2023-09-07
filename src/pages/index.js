import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-5 ${inter.className}`}
    >
    <div className='flex mb-5'>
    <Link className='mx-3 text-sm font-bold bg-red-400 rounded p-2' href={'/login'}>Login</Link>
    <Link className='mx-3 text-sm font-bold bg-red-400 rounded p-2' href={'/contact'}>Contact</Link>
    <Link className='mx-3 text-sm font-bold bg-red-400 rounded p-2' href={'/about'}>About</Link>
    <Link className='mx-3 text-sm font-bold bg-red-400 rounded p-2' href={'/expensetracker'}>Expense Tracker</Link>
      </div>
      <h1 className='text-[35px] font-bold text-blue-900 bg-yellow-200 rounded p-3'>Counter App</h1>
      <div className='flex justify-between items-center'>
        <div className='text-[30px] font-bold bg-red-400 rounded px-2 m-1 cursor-pointer'>+</div>
        <h1 className='text-[30px] font-bold my-2'>0</h1>
        <div className='text-[30px] font-bold bg-red-400 rounded px-2 m-1 cursor-pointer'>-</div>

      </div>
    </main>
  )
}
