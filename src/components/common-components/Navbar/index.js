"use client"
import Link from 'next/link'
import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  let navElements = ['modules','quiz','videos','live'];
  function toggleHandle(){
    console.log("Toggle Triger")
    setToggle(!toggle);
  }
  return (
    <div className=" max-w-7xl  overflow-x-hidden max-h-[90px] px-3 md:px-6 m-auto flex flex-row justify-between ">
      <Link href={'/'}>
      <div className="max-w-[150px]">
        <img 
        src={'/logo.png'}
        />
      </div>
      </Link>
      <div className=" flex items-center">
          <ul className="hidden md:flex md:flex-row gap-10 text-lg font-semibold text-gray-800">
            <li><Link href={'/modules'}>Modules</Link></li>
            <li><Link href={'/'}>Quiz</Link></li>
            <li><Link href={'/'}>Videos</Link></li>
            <li><Link href={'/'}>Live</Link></li>
          </ul>
          <div className=" flex flex-row items-center justify-center md:hidden">
            {
              toggle?
              <IoClose onClick={toggleHandle} className="text-gray-800 text-[22px] "/>:
              <GiHamburgerMenu onClick={toggleHandle} className="text-gray-800 text-[22px] "/>
            }  
          </div>
          {/* ${toggle?'block ':'hidden '} */}
          <div className={` md:hidden 
           
            ${toggle ? 'translate-x-0' : '-translate-x-full'}
            z-10 overflow-x-clip  absolute top-[80px] right-[0] bg-white w-[100%] h-[40%] p-4 transition-all ease-in-out duration-300 `}>
          
            <ul className=" gap-10 text-lg font-semibold text-center text-gray-800">
              {navElements.map((e)=>{
                return <li key={e} className="p-2" onClick={()=>setToggle(!toggle)} ><Link href={e} >{e.toUpperCase()}</Link></li>
              })}
            </ul>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar