"use client"
// import { auth } from '@/auth';
import { useSession } from 'next-auth/react';
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { doLogout } from '@/actions/user';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

const Navbar = () => {
  const [toggle,setToggle]=useState(false);
  const [loggedIn,SetLoggedIn]= useState(false);
  let navElements = ['modules','quiz','videos','live'];
  const router = useRouter();

  function toggleHandle(){
    console.log("Toggle Triger")
    setToggle(!toggle);
  }
  const handleLogout = ()=>{
    doLogout();
    router.push('/login');
  }
  const auth =useSession();
  console.log(auth);
  useEffect(()=>{
    if(!auth.data){
      SetLoggedIn(false)
    }else{
      SetLoggedIn(true)
    }
  },[auth])
  async function handleSignOut(){
    await signOut()
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
            {loggedIn?
            <>
            <li className='cursor-pointer' onClick={handleSignOut}>Logout</li>
            <li>
              {auth?.data?.user?.image?
                <img className='w-[34px] h-[34px] rounded-full' src={auth?.data?.user?.image} />:
                <FaUserCircle/>
               }   
              </li>
              </>
            :
            <li><Link href={'/login'}>Login</Link></li>
            }
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
            {loggedIn?
            <>
            <li className="p-2" onClick={()=>{setToggle(!toggle);handleSignOut();}} >Logout</li>
            <li>
              {auth?.data?.user?.image?
                <img className='w-[34px] h-[34px] rounded-full' src={auth?.data?.user?.image} />:
                <FaUserCircle/>
               }   
              </li>
              </>
            :
            <li onClick={()=>setToggle(!toggle)} ><Link href={'/login'}>Login</Link></li>
            }
            </ul>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar