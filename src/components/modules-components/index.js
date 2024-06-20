import Link from 'next/link'
import React from 'react'

const index = ({data}) => {
  let colorCook = ['border-t-orange-400','border-t-green-300','border-t-pink-400','border-t-yellow-400','border-t-red-400','border-t-violet-400'];
  return (

    <div className={`relative border  border-t-[7px] border-x-white border-b-white ${colorCook[data.id]}`}>
        <h3 className=" absolute bg-white top-[-30px] left-[-4px] p-1 text-gray-800 text-[34px] leading-[29px] font-semibold ">{data.id}</h3>
        <h2 className="mt-3 subHeading-mobile">{data.title}</h2>
        <div className="flex flex-col gap-2 mt-2">
          <h4 className="text-gray-600 text-[16px]">{data.chapters}</h4>
          <p className="text-gray-600 text-[14px]">{data.desc}</p>
          <Link href={'/'}><p className="text-blue-600 cursor-pointer font-semibold text-[17px]" >View Module</p></Link>
        </div>
    </div>
  )
}

export default index