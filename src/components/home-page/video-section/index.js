import React from 'react'
import VideoCards from '../video-cards'

const VideoSection = () => {

    let VideoData = [
        {   
            title:"Impact cost and how it can ruin a trade",
            link:"https://zerodha.com/varsity/chapter/impact-cost-and-how-it-can-ruin-a-trade/",
            imgUrl:'https://img.youtube.com/vi/m2HiZG0Fhts/mqdefault.jpg'
        },
        {
            title:"5 types of share capital",
            link:"https://zerodha.com/varsity/chapter/5-types-of-share-capital/",
            imgUrl:'https://img.youtube.com/vi/q-T2svXZ77s/mqdefault.jpg'
        },
        {
            title:"How OFS allotment is done",
            link:"https://zerodha.com/varsity/chapter/how-ofs-allotment-is-done/",
            imgUrl:'https://img.youtube.com/vi/hwiwWPrfWXU/mqdefault.jpg'
        },
        {
            title:"Building a mutual fund portfolio",
            link:"https://zerodha.com/varsity/chapter/building-a-mutual-fund-portfolio/",
            imgUrl:'https://img.youtube.com/vi/6Zrl3ZeqqsE/mqdefault.jpg'
        }
    ]

  return (
    <div className="max-w-7xl  my-2 md:my-16 m-auto p-4 ">
        <h2 className="my-4 subHeading-mobile md:subHeading mb-8">Videos</h2>
        <div className="flex flex-row flex-wrap gap-16 items-start " >
            {VideoData.map((data,index)=>  <VideoCards key={index} vidDetails={data}/>)}
        </div>
    </div>
  )
}



export default VideoSection