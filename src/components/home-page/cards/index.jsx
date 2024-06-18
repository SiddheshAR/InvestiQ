import React from 'react'
import Link from 'next/link'
const Cards = ({cardDetails}) => {
    // console.log(cardDetails.color)
  return (

    <div className="min-w-[220px] card-lift m-3 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <Link href={cardDetails.link}>
        <div style={{backgroundColor:cardDetails.color}} className='h-[100px] flex justify-start items-end rounded-t-lg rounded-b-none shadow p-4'>
            <img className='min-w-[30px] min-h-[40px]' src={cardDetails.icons}/>
        </div>
        <div className="h-[60px] p-4">
            <h2 className='text-[19px] text-gray-800 font-semibold'>{cardDetails.name}</h2>
        </div>
        </Link>
    </div>
  )
}

export default Cards