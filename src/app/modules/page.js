import React from 'react'
import modules from '@/utils/modules/modulesData';
import ModulesTab from '@/components/modules-components/index'
const page = () => {
    // console.log(modules);
  return (
    <div className="max-w-6xl my-2 md:my-2 p-7 m-auto">
        <h2 className="heading-mobile md:heading-mobile my-14 ">Modules</h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modules.map((data,index)=>{
                return <ModulesTab key={index} data={data}/>    
            })}
        </div>
    </div>
  )
}
export default page