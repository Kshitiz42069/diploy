import React from 'react'


function GaletoConnect() {
  return (
    <div className='py-4 px-[1rem] lg:px-[4rem] bg-white flex lg:flex-row flex-col justify-center items-center'>
        {/* left side */}
        <div className='lg:w-1/2'>
            <img className='block w-full h-full' src={require('../../../assets/images/phone.gif')} alt="hero" />
        </div>
        
        {/* right side */}
        <div className='lg:w-1/2 lg:pl-[3rem] lg:pr-[3.5rem] pt-8 pb-4'>
            <p className=' font-myFont font-normal text-xl'>For print producers</p>
            <p className='lg:text-6xl text-3xl font-myFont font-medium lg:leading-[4.5rem]'>GelatoConnect</p>
            <p className='text-[1.4rem] font-myFont font-medium mt-5'>Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry</p>
            <div className='flex lg:flex-row flex-col lg:w-full w-full gap-[1rem] mt-[1.5rem]'>
                <button className='border-2 rounded-full px-3 py-2 font-bold text-sm bg-black text-white hover:text-gray-300'>Learn more</button>
            </div>
        </div>
    </div>
  )
}

export default GaletoConnect