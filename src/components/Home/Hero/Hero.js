import React from 'react'
import shopify from '../../../assets/images/shopify_monotone_black.svg'
import { ReactComponent as Star } from '../../../assets/images/star.svg'

function Hero() {
  return (
    <div className='py-2 px-[2rem] lg:px-[4rem] bg-[#FAF5EF] lg:bg-white flex lg:flex-row flex-col-reverse justify-center'>
        {/* left side */}
        <div className='lg:w-1/2 lg:pl-[3rem] lg:pr-[3.5rem] pt-8'>
            <p className='lg:text-6xl text-3xl font-myFont font-medium lg:leading-[4.5rem]'>Print on demand for your ecommerce business</p>
            <p className='text-2xl font-myFont font-medium mt-5'>Sign up for free and only pay for what you sell</p>
            <p className=' font-myFont font-light mt-2'>Turn your passion into profit with the world's largest <span className='underline underline-offset-2'>print on demand</span> network.</p>
            <div className='flex lg:flex-row flex-col lg:w-full w-full gap-[1rem] mt-[1.5rem]'>
                <button className='border-2 rounded-full px-3 py-2 font-bold text-sm bg-black text-white hover:text-gray-300'>Get started for free</button>
                <button className='border-2 rounded-full px-3 py-2 font-bold text-sm hover:bg-gray-300'>See our products</button>
            </div>
            {/* shopify logo */}
            <div className='mt-[2rem] flex flex-col gap-2'>
                <img className='w-[10rem]' src={shopify} alt="shopify" />
                <div className='flex gap-1'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <p className='text-gray-500 tracking-wider pl-2'>4.8/5</p>
                </div>
                <p className='font-myFont font-light'>based on 887 reviews</p>
            </div>
        </div>
        {/* right side */}
        <div className='lg:w-1/2'>
            <img className='hidden lg:block w-full h-full' src={require('../../../assets/images/hero_desktop.webp')} alt="hero" />
            <img className='lg:hidden w-full h-full' src={require('../../../assets/images/hero.webp')} alt="hero" />
        </div>
    </div>
  )
}

export default Hero