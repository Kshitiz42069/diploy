import React from 'react'
import logo from '../../assets/images/_logo.svg'
import googleplay from '../../assets/images/badge.svg'
import ios from '../../assets/images/badge-1.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'

function Desktop() {
  return (
    <div className='hidden lg:block bg-black py-[2.5rem] px-[1.5rem] lg:px-[4rem] font-myFont'>
        {/* top */} 
        <div className='flex items-center justify-between'>
            {/* logo */}
            <div>
                <img className='w-[8rem] lg:w-[10rem]' src={logo} alt="logo" />
            </div>
            {/* social handles */}
            <div className='hidden lg:flex items-center justify-evenly gap-[1.5rem]'>
                <p className='font-normal text-white'>Find Gelato on:</p>
                <Instagram/>
                <Instagram/>
                <Instagram/>
                <Instagram/>
                <Instagram/>
            </div>
        </div>
        {/* content */}
        <div className='flex gap-[2rem]'>
          <div className='w-[23rem]'>
            <p className='text-white font-light text-xs'>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
            <button className='bg-white px-3 py-2 rounded-full mt-[1rem]'>Get started</button>
            <p className='mt-[2.5rem] text-white'>Get the app</p>
            <div className='flex items-center gap-3'>
              <img src={ios} alt="ios" />
              <img src={googleplay} alt="googleplay" />
            </div>
          </div>
          <div className='text-white flex flex-col gap-1'>
            <p className='font-medium text-lg'>Print on demand</p>
            <p className='text-xs font-normal mt-2'>What is Print on demand</p>
            <p className='text-xs font-normal'>Product Catalog</p>
            <p className='text-xs font-normal'>Shipping and delivery</p>
            <p className='text-xs font-normal'>Dropshipping products</p>
            <p className='text-xs font-normal'>Pro sellers</p>
            <p className='text-xs font-normal'>White label products</p>
            <p className='text-xs font-normal'>Returns policy</p>
            <p className='text-xs font-normal'>Global, yet local</p>
            <p className='text-xs font-normal'>Sustainability</p>
            <p className='text-xs font-normal'>Support</p>
          </div>
          <div className='text-white flex flex-col gap-1'>
            <p className='font-medium text-lg'>Integrations</p>
            <p className='text-xs font-normal mt-2'>Shopify</p>
            <p className='text-xs font-normal'>Etsy</p>
            <p className='text-xs font-normal'>WooCommerce</p>
            <p className='text-xs font-normal'>Wix</p>
            <p className='text-xs font-normal'>Squarespace</p>
            <p className='text-xs font-normal'>BigCommerce</p>
            <p className='text-xs font-normal'>API</p>
          </div>
          <div className='text-white flex flex-col gap-1'>
            <p className='font-medium text-lg'>Start selling</p>
            <p className='text-xs font-normal mt-2'>Embroidery</p>
            <p className='text-xs font-normal'>Print on demand t-shirts</p>
            <p className='text-xs font-normal'>Print on demand hoodies</p>
            <p className='text-xs font-normal'>Print on demand posters</p>
            <p className='text-xs font-normal'>Print on demand canvas</p>
            <p className='text-xs font-normal'>Print on demand calendars</p>
            <p className='text-xs font-normal'>Print on demand mugs</p>
            <p className='text-xs font-normal'>Custom products</p>
            <p className='text-xs font-normal'>Custom clothing</p>
            <p className='text-xs font-normal'>Custom merchandise</p>
            <p className='text-xs font-normal'>Custom phone cases</p>
            <p className='text-xs font-normal'>Print on demand Europe</p>
            <p className='text-xs font-normal'>Print on demand UK</p>
            <p className='text-xs font-normal'>Print on demand France</p>
            <p className='text-xs font-normal'>Print on demand Canada</p>
            <p className='text-xs font-normal'>Merch maker</p>
          </div>
          <div className='text-white flex flex-col gap-1'>
            <p className='font-medium text-lg'>Print on demand</p>
            <p className='text-xs font-normal mt-2'>What is Print on demand</p>
            <p className='text-xs font-normal'>Product Catalog</p>
            <p className='text-xs font-normal'>Shipping and delivery</p>
            <p className='text-xs font-normal'>Dropshipping products</p>
            <p className='text-xs font-normal'>Pro sellers</p>
            <p className='text-xs font-normal'>White label products</p>
            <p className='text-xs font-normal'>Returns policy</p>
            <p className='text-xs font-normal'>Global, yet local</p>
            <p className='text-xs font-normal'>Sustainability</p>
            <p className='text-xs font-normal'>Support</p>
          </div>
        </div>
        {/* bottom */}
        <div className='mt-[2rem] text-white flex justify-between'>
          <div className='flex justify-start h-5'>
            <p className='font-light text-xs px-3'>Contact us</p>
            <p className='font-light text-xs px-3 border-l-2'>Legal</p>
            <p className='font-light text-xs px-3 border-l-2'>Privacy Policy</p>
            <p className='font-light text-xs px-3 border-l-2'>Cookie Policy</p>
            <p className='font-light text-xs px-3 border-l-2'>API terms</p>
            <p className='font-light text-xs px-3 border-l-2'>sitemap</p>
          </div>
          <div>
            <p className='border-2 w-[10rem] px-2 py-2'>English(India)</p>
          </div>
        </div>
    </div>
  )
}

export default Desktop