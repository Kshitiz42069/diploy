import React from 'react'
import { ReactComponent as Headphones } from '../../assets/icons/headphones.svg'
import globe from '../../assets/icons/globe.svg'
import arrow from '../../assets/icons/arrow.svg'
import cart from '../../assets/icons/cart.svg'
import { ReactComponent as User } from '../../assets/icons/user.svg' 
function DesktopNavbar() {
  return (
    <div className='hidden lg:block pt-4 bg-white border-b-2 font-myFont'>
      {/* top */}
      <div className='flex items-center justify-between pb-3 px-[4rem] text-sm'>
        <img className='h-10' src={require('../../assets/images/logo.png')} alt="logo" />
        <div className='flex items-center justify-evenly gap-4'>
          <button className=' py-2 flex items-center justify-center gap-[0.5rem] font-medium'><Headphones/>Contact Us</button>
          <div className=' flex items-center gap-2'>
              <img className='w-6 h-6' src={globe} alt="" />
              <p className=' font-medium text-sm'>IN/INR</p>
              <img className='w-6 h-6 text-black' src={arrow} alt="" />
          </div>
          <div className='flex items-center gap-1'>
              <img className='w-6 h-6' src={cart} alt="" />
              <p className=' font-medium text-sm'>Cart</p>
          </div>
          <button className=' font-medium py-3 flex items-center gap-1'><User/>Sign in</button>
          <button className='py-2 px-4 bg-black text-white rounded-full text-sm font-myFont font-medium'>Sign up for free</button>
        </div>
      </div>
      <hr />
      {/* bottom */}
      <div className='flex items-center px-[2rem]'>
        <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>Products</p>
            <img className='w-6 h-6 text-black' src={arrow} alt="" />
        </div>
        <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>Start Selling</p>
            <img className='w-6 h-6 text-black' src={arrow} alt="" />
        </div>
        <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>Toola and apps</p>
            <img className='w-6 h-6 text-black' src={arrow} alt="" />
        </div>
        <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>Pricing</p>
            <img className='w-6 h-6 text-black' src={arrow} alt="" />
        </div>
        <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>Resources</p>
            <img className='w-6 h-6 text-black' src={arrow} alt="" />
        </div>
        <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>Pro Sellers</p>
        </div>
        <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>GelatoConnect</p>
            <img className='w-6 h-6 text-black' src={arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DesktopNavbar