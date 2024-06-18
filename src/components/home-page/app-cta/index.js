import React from 'react'

const AppCTA = () => {
  return (
    <div  className="flex flex-col md:flex-row justify-between  p-8  my-2 md:my-14 md:p-14 bg-slate-200 max-w-7xl m-auto gap-4">
        <div>
            <h2 className="subHeading-mobile md:subHeading mb-2">
            InvestiQ on mobile
            </h2>
            <p className=" defaultFont-mobile md:defaultFont ">
            Explore stock market lessons in bite size modules, quizzes, and tests.
            </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
            <div>
                <img className="h-[55px] cursor-pointer"
                src={'https://zerodha.com/varsity/wp-content/themes/varsity2//images/playstore.png'}
                />
            </div>
            <div>
            <img className="h-[55px] cursor-pointer"
                src={'https://zerodha.com/varsity/wp-content/themes/varsity2//images/appstore.png'}
                />
                
            </div>
        </div>
    </div>
  )
}

export default AppCTA