import React from 'react'
import ResponsiveNavbar from './ResponsiveNavbar'
import DesktopNavbar from './DesktopNavbar'

function Navbar() {
  return (
    <div className='sticky top-0 bg-white z-[10]'>
      <ResponsiveNavbar/>
      <DesktopNavbar/>
    </div>
  )
}

export default Navbar