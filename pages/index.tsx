import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { BiSearchAlt } from "react-icons/bi";

interface IconProps {
  icon: React.ReactNode
  textColor: string,
  bgColor: string,
  rounded: string
}

const Home: NextPage = () => {
  return (
    <nav className='flex justify-between items-center bg-gray-800 h-14'>
      <div className='p-4'>
        <p className='text-white'>Logo</p>
      </div>
      <div className='flex items-center p-4'>
        <input type="text" placeholder='Search' className='bg-slate-700 text-white font-light focus:outline-none shadow border-none focus:ring-2 focus:ring-teal-600 rounded-sm w-60 p-1 pl-2' />
        <NavBarIcon icon={<BiSearchAlt size="22" />} textColor={'text-white'} bgColor={'bg-gray-500'} rounded={'rounded-md'} /> 
      </div>
      <div className='p-4'>
        <p className='text-white'>Notifications</p>
      </div>
      
    </nav>
    
  )
}

 const NavBarIcon = ({icon, textColor, bgColor, rounded}: IconProps) => (
  <div  className={`${textColor} flex justify-center ml-2 ${bgColor} w-[45px] border-none ${rounded} p-1 hover:scale-105`}>
    {icon}
  </div>
 )

export default Home
