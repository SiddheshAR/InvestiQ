"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
import { signIn, useSession } from 'next-auth/react'; // Assuming you use NextAuth for authentication
import { CredentialsLogin, login } from '@/actions/user';
// import LoginForm from '@/components/login-page/loginForm';
import { redirect, useRouter } from 'next/navigation';
import SocialLogin from '@/components/login-page/loginForm';

const  Index =() => {
  const router = useRouter();
  // const session = useSession();
  const [errorMsg,setErrMsg]=useState("");
  async function handleFormSubmit(event){
    try{
      const formData = new FormData(event.currentTarget);
      const response = await CredentialsLogin(formData);

      if(!!response.error){
        setErrMsg(response.error.message)
      }else{
        router.push('/')
      }
    }catch(error){
      setErrMsg("Check your credentials.")
    }
  }

  return (
    <div>
      <div className="max-w-2xl p-4 my-5 mx-auto">
        <div className="text-[20px]">
          {errorMsg}
          </div>
            <form onSubmit={handleFormSubmit}
                className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
                >
                <div className="my-2">
                    <label htmlFor="email">Email Address</label>
                    <input className="border mx-2 border-gray-500 rounded" type="email" name="email" id="email" />
                </div>

                <div className="my-2">
                    <label htmlFor="password">Password</label>
                    <input className="border mx-2 border-gray-500 rounded" type="password" name="password" id="password" />
                </div>

                <button type="submit" className="bg-orange-300 mt-4 p-2 rounded flex justify-center items-center w-36">
                    Credential Login
                </button>
            </form>
        <SocialLogin/>
        <p>Don't have an account? <Link href={'/register'}>Sign-up</Link></p>
      </div>
    </div>
  )
}

export default Index
