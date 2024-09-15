import React from 'react'

function GaletoMeet() {
  return (
    <div className='py-[4rem] px-[2rem] lg:px-[4rem] bg-[#FAF5EF] lg:bg-[#F9F6EF] flex lg:flex-row flex-col-reverse justify-center items-center'>
        {/* left side */}
        <div className='lg:w-1/2 lg:pl-[3rem] lg:pr-[3.5rem] pt-8'>
            <p className='lg:text-6xl text-3xl font-myFont font-medium lg:leading-[4.5rem]'>Meet GelatoConnect at Printing United</p>
            <p className=' font-myFont font-thin mt-5'>Meet us at Printing United from September 10-12 in Las Vegas. Book your meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.</p>
            <div className='flex lg:flex-row flex-col lg:w-full w-full gap-[1rem] mt-[1.5rem]'>
                <button className='border-2 rounded-full px-3 py-2 font-bold text-sm bg-black text-white hover:text-gray-300'>Book a meeting</button>
            </div>
        </div>
        {/* right side */}
        <div className='lg:w-1/2'>
            <img className=' w-full h-full' src={require('../../../assets/images/printing.webp')} alt="hero" />
        </div>
    </div>
  )
}

export default GaletoMeet