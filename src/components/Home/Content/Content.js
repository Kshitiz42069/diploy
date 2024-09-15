import React from 'react'

function Content() {
  return (
    <div className='lg:py-6'>
        {/* top */}
        <div className='hidden lg:flex justify-evenly font-myFont gap-[2rem] px-[5rem] py-[3rem] bg-[#F9F6EF]'>
            <div className='flex flex-col justify-center items-center '>
                <p className='font-medium text-4xl'>90%</p>
                <p className='font-normal text-2xl text-center w-[20rem]'>of all orders are produced locally</p>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <p className='font-medium text-4xl'>90%</p>
                <p className='font-normal text-2xl text-center w-[20rem]'>of orders arrive within 5 days of ordering</p>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <p className='font-medium text-4xl'>140+</p>
                <p className='font-normal text-2xl text-center w-[20rem]'>print providers across 32 countries</p>
            </div>
        </div>
        {/* why choose */}
        <div className='font-myFont lg:pt-[3rem]'>
            <p className='text-center font-medium text-4xl lg:text-6xl'>Why choose Gelato</p>
            {/* content */}
            <div className='px-[1.5rem] lg:px-[3rem] py-[3rem] flex lg:flex-row flex-col gap-[3rem]'>
                {/* left */}
                <div className='lg:w-1/2'>
                    <img className='hidden lg:block w-full h-full' src={require('../../../assets/images/why_choose.webp')} alt="hero" />
                    <img className='lg:hidden w-full h-full' src={require('../../../assets/images/why_choose.webp')} alt="hero" />
                </div>
                {/* right */}
                <div className='flex flex-col gap-[1rem]'>
                    <div className='flex flex-col gap-[0.6rem]'>   
                        <p className='font-medium text-[1.6rem] tracking-wide'>▻ World's largest print-on-demand network</p>
                        <p className='font-light text-[1.05rem]'>140+ print partners in 32 countries. Gelato is a truly global service.</p>
                    </div>
                    <div className='flex flex-col gap-[0.6rem]'>   
                        <p className='font-medium text-[1.6rem] tracking-wide'>▻ Sell globally, produce locally</p>
                        <p className='font-light text-[1.05rem]'>Your products are produced close to your customers, wherever they are.</p>
                    </div>
                    <div className='flex flex-col gap-[0.6rem]'>   
                        <p className='font-medium text-[1.6rem] tracking-wide'>▻ 100% free editing tools</p>
                        <p className='font-light text-[1.05rem]'>Create your custom products using our suite of free tools.</p>
                    </div>
                    <div className='flex flex-col gap-[0.6rem]'>   
                        <p className='font-medium text-[1.6rem] tracking-wide'>▻ 60+logistics partners</p>
                        <p className='font-light text-[1.05rem]'>Our global network of logistics partners ensures your products are delivered fast.</p>
                    </div>
                    <div className='flex flex-col gap-[0.6rem]'>   
                        <p className='font-medium text-[1.6rem] tracking-wide'>▻ High-quality products</p>
                        <p className='font-light text-[1.05rem]'>We partner with the world's leading brands to ensure the best quality products.</p>
                    </div>
                    <div className='flex flex-col gap-[0.6rem]'>   
                        <p className='font-medium text-[1.6rem] tracking-wide'>▻ Endless creativity with Shutterstock Images</p>
                        <p className='font-light text-[1.05rem]'>Access millions of images and graphics to create unique products you can sell in your store.</p>
                    </div>
                    <div className='flex flex-col gap-[0.6rem]'>   
                        <p className='font-medium text-[1.6rem] tracking-wide'>▻ 1-click integration to the leading ecommerce platforms</p>
                        <p className='font-light text-[1.05rem]'>Connect your store to Gelato using our integrations with Shopify, Etsy and more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content