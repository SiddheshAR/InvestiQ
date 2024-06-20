import React from 'react'

const Hero = () => {
  return (
    <div className=" max-w-7xl mb-4 md:my-8 m-auto" >
        <div className="flex flex-col lg:flex-row lg:gap-10 p-4">
            <div className="w-[95%] lg:w-[54%] my-4 flex flex-col gap-3 ">
              <h1 className="heading-mobile md:heading ">Free and Open</h1>
              <h3 className="subHeading-mobile md:subHeading ">
                Stock market and Financial education
              </h3>
              <p className="defaultFont-mobile  md:defaultFont">
              Varsity is an extensive and in-depth collection of stock market and financial lessons created by Karthik Rangappa at Zerodha. It is free and openly accessible to everyone and is one of the largest financial education resources on the web. No signup, no pay-wall, no ads.
              </p>
            </div>
            <div className="w-[95%] lg:w-[40%]">
                <div>
                  <img 
                  src={'https://zerodha.com/varsity/wp-content/themes/varsity2//images/landing.png'}
                  />
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Hero