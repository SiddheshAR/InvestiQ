"use client"
import React from 'react';
import { useSearchParams  } from 'next/navigation';
import ModulePageComponent from '@/components/modules-page/index';
import ChapterData from '@/utils/modules/chapterData'
import Link from 'next/link';

const page = () => {
    const params = useSearchParams();
    const module =params.get('name');
    let modIndex = 0;
    let colorTab = [,"","","","","border-t-violet-400"];
    if(module=='intro-stock-markets'){
      modIndex = 0
      colorTab="border-t-orange-400"
    }else if(module=='fundamental-analysis'){
      modIndex = 1
      colorTab="border-t-green-300"
    }else if(module=='technical-analysis'){
      modIndex = 2
            colorTab="border-t-pink-400"}
    else if(module=='risk-management'){
      modIndex = 3
            colorTab="border-t-yellow-400"}
    else if(module=='sector-analysis'){
      modIndex = 4
            colorTab="border-t-red-400"
    }
  return (
    <div className="max-w-5xl my-6 md:my-6 p-6 m-auto">
        <div className="relative border-t-4 md:border-t-8 border-t-green-500 mt-12 w-[70%] md:w-[35%] lg:w-[40%]">
           <p className="absolute top-[-70px] left-[-10px] text-[65px] md:text-[70px] px-2 bg-white text-gray-800 font-semibold"> {ChapterData[modIndex].id} </p>
        </div>

        <h2 className="my-8  subHeading  ">  
          {ChapterData[modIndex].title}
        </h2>
        <hr></hr>
      {/* <ModulePageComponent newModData={modIndex}/> */}
        {ChapterData[modIndex].chapters.map((e)=>{
          return(
          <div key={e.chp_id} className="py-4" >
            <Link href={e.link}>
              <h2 className="text-[20px] hover:text-blue-800 text-gray-800 font-semibold">
                {e.chp_id}. {e.title}
              </h2>
            </Link>
            <p className="defaultFont pt-2">
              {e.desc}
            </p>
          </div>)
        })}
    </div>
  )
}

export default page