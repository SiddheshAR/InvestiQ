import React from 'react'

const GridSection = () => {

  let gridController = [
    {
      position:'left',
      img:'https://zerodha.com/varsity/wp-content/themes/varsity2/images/modules.svg',
      title:'Modules',
      desc:'Explore all the open-access InvestiQ modules that cover the entire spectrum of financial literacy and capital markets; everything from savings and taxation to option strategies and technical analysis.',
      button:'Learn More',
      link:''
    },{
      position:'right',
      img:'https://zerodha.com/varsity/wp-content/themes/varsity2/images/certified.svg',
      title:'InvestiQ Certified',
      desc:'An online certification program designed to test your market knowledge and give you the confidence to start your career in capital markets.',
      button:'Learn More',
      link:''
    }
  ]

  return (
    <div className="max-w-5xl my-2 md:my-2 p-6 m-auto">
        {gridController.map((data,index)=>{
          return(
            <div key={index} className={`flex flex-col mb-8 md:mb-20 gap-8 ${data.position=='left'?'md:flex-row ':'md:flex-row-reverse'}`}>
              <div className="md:w-[47%] flex flex-col gap-4">
                <h2 className=" text-5xl font-semibold text-gray-700">{data.title}</h2>
                <h3 className="defaultFont-mobile md:defaultFont">{data.desc}</h3>
                <button className="hover:primaryButton-mobile primaryButton my-4">{data.button}</button>
              </div>
              <div className="flex flex-row md:w-[45%]  justify-center items-center">
                  <img src={data.img} className="max-w-[300px] " />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default GridSection