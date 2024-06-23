import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
const index = () => {
  return (
    <div>
      <div className="max-w-2xl p-4 my-5 mx-auto">
        <div>Login Page</div>
        <form className="my-6 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label>
                  Email
                </label>
                <input
                    placeholder="Enter your email"
                    input='email'
                    name="email"
                    className=" p-2 border"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label>
                  Password
                </label>
                <input
                    placeholder="*****"
                    input='password'
                    name="password"
                    className=" p-2 border"
                />
              </div>
              <button className="primaryButton">Sign-In</button>
        </form>
        <form>
          <div className="p-1 flex flex-row">
            <p className="text-[14px]">Sign in using Google:</p>
            <button className="text-[28px]">
             <FcGoogle/> 
            </button>
          </div>
        </form>
        <form>
          <div className="p-1 flex flex-row">
            <p className="text-[14px]">Sign in using Github:</p>
            <button className="text-[28px]">
             <ImGithub /> 
            </button>
          </div>
        </form>
        <p>Dont have account? <Link href={'/register'}>Sign-up</Link></p>
      </div>
    </div>
  )
}

export default index