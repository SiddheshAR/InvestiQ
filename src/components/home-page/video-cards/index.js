import Link from 'next/link'
import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
const VideoCards = ({vidDetails}) => {

  return (

    <div className="min-w-[220px] card-lift rounded-sm max-w-[250px] 
    shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ">
        <Link href={vidDetails.link}>
            <div>
                <img src={vidDetails.imgUrl}/>
            </div>
            <div className="p-4">
                <h3 className='text-[16px] text-gray-800 font-semibold  truncate '>{vidDetails.title}</h3>
                <div className="text-blue-600 flex flex-row gap-1"> <FaCirclePlay className="mt-[3px]"/> <p>Play</p></div>
            </div>
        </Link>
    </div>
    
  )
}

export default VideoCards