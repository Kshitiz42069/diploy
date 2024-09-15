import React, { useState } from 'react'
import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
import { ReactComponent as Close } from '../../assets/icons/close.svg'
import { ReactComponent as User } from '../../assets/icons/user.svg' 
import globe from '../../assets/icons/globe.svg'
import arrow from '../../assets/icons/arrow.svg'
import cart from '../../assets/icons/cart.svg'

function ResponsiveNavbar() {
    const [menu,setMenu] = useState(false);
    const handlemenu = ()=>{
        setMenu(!menu);
    }
  return (
    <div className={"relative lg:hidden flex items-center py-3 justify-evenly "}>
        <div onClick={handlemenu}>
            <Hamburger/>
        </div>
        <img className='h-8' src={require('../../assets/images/logo.png')} alt="logo" />
        <button className='bg-black text-white px-3 py-2 rounded-full text-sm font-myFont font-medium'>Sign up for free</button>
        {menu && 
            <div className='bg-white text-black absolute top-0 left-0 px-5 py-4 w-[85vw] h-[100vh]'>
                {/* top */}
                <div className='flex items-center gap-[1.5rem] border-b-2 pb-4'>
                    <Close onClick={handlemenu}/>
                    <div className='flex items-center gap-2'>
                        <img className='w-6 h-6' src={globe} alt="" />
                        <p className=' font-myFont font-medium text-sm'>IN/INR</p>
                        <img className='w-6 h-6 text-black' src={arrow} alt="" />
                    </div>
                    <div className='border-l-2 pl-4 flex items-center gap-4'>
                        <img className='w-6 h-6' src={cart} alt="" />
                        <p className=' font-myFont font-medium text-sm'>Cart</p>
                    </div>
                </div>
                {/* mid */}
                <div className='border-b-2 flex items-center justify-evenly py-6 gap-6'>
                    <button className='w-1/2 py-2 px-4 bg-black text-white rounded-full text-sm font-myFont font-medium'>Sign up for free</button>
                    <button className='w-1/2 font-myFont font-medium border-l-2 py-3 flex items-center pl-3 gap-2'><User/>Sign in</button>
                </div>
                {/* content */}
                <div className='py-5 flex flex-col gap-3 font-myFont font-normal text-sm'>
                    <div className='flex items-center justify-between'>
                        <p>Products</p>
                        <img className='w-6 h-6 text-black' src={arrow} alt="" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Start Selling</p>
                        <img className='w-6 h-6 text-black' src={arrow} alt="" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Tools and app</p>
                        <img className='w-6 h-6 text-black' src={arrow} alt="" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Pricing</p>
                        <img className='w-6 h-6 text-black' src={arrow} alt="" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Resources</p>
                        <img className='w-6 h-6 text-black' src={arrow} alt="" />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Pro Sellers</p>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>GelatoConnect</p>
                        <img className='w-6 h-6 text-black' src={arrow} alt="" />
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default ResponsiveNavbar