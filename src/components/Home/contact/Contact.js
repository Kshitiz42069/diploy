import React from 'react'
import { ReactComponent as Headphones } from '../../../assets/icons/headphones_white.svg'

function Contact() {
  return (
    <div className='sticky z-0 top-[90%] left-[95%] w-[10rem]'>
        <button className=' border-2 px-3 py-2 rounded-full bg-black text-white flex items-center justify-center gap-[0.5rem]'><Headphones/>Contact Us</button>
    </div>
  )
}

export default Contact