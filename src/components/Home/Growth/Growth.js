import React from 'react'

function Growth() {
  return (
    <div className='py-4 px-[2rem] lg:px-[4rem] bg-[#FAF5EF] lg:bg-[#F9F6EF] flex lg:flex-row flex-col-reverse justify-center items-center'>
        {/* left side */}
        <div className='lg:w-1/2 lg:pl-[3rem] lg:pr-[3.5rem] pt-8'>
            <p className=' font-myFont font-normal text-xl'>For print on demand sellers</p>
            <p className='lg:text-6xl text-3xl font-myFont font-medium lg:leading-[4.5rem]'>Accelerate business growth with innovative design tools and apps</p>
            <p className='text-2xl font-myFont font-medium mt-5'>See how our cutting-edge solutions can help you reach new customers and maximize your profits.</p>
            <div className='flex lg:flex-row flex-col lg:w-full w-full gap-[1rem] my-[1.5rem]'>
                <button className='border-2 rounded-full px-3 py-2 font-bold text-sm bg-black text-white hover:text-gray-300'>Get started</button>
            </div>
        </div>
        {/* right side */}
        <div className='lg:w-1/2'>
            <img className='w-full h-full' src={require('../../../assets/images/design.gif')} alt="hero" />
        </div>
    </div>
  )
}

export default Growth