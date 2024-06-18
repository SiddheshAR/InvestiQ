import React from 'react'

const VideoSection = () => {
  return (
    <div className="max-w-7xl  my-2 md:my-16 m-auto p-4 ">
        <h2 className="my-4 subHeading-mobile md:subHeading ">Videos</h2>
        <div className="flex flex-row flex-wrap  items-start " >
            {cardItem.map((data,index)=>  <Cards key={index} cardDetails={data}/>)}
        </div>
    </div>
  )
}

export default VideoSection