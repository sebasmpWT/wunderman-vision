import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BiSearchAlt } from "react-icons/bi";

const Home: NextPage = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-800 h-14'>
      <div className='p-4'>
        <p className='text-white'>Logo</p>
      </div>
      <div className='flex items-center p-4'>
        <input type="text" placeholder='Search' className='bg-slate-700 text-white font-light focus:outline-none shadow border-none focus:ring-2 focus:ring-teal-600 rounded-sm w-60 p-1 pl-2' />
        <BiSearchAlt className='text-white ml-2 bg-gray-600 border rounded-md p-1' size="30" />
      </div>
      <div className='p-4'>
        <p className='text-white'>Notifications</p>
      </div>
      
    </nav>
    
  )
}

export default Home
