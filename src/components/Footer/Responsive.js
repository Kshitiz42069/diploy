import React, { useState } from 'react'
import logo from '../../assets/images/_logo.svg'
import googleplay from '../../assets/images/badge.svg'
import ios from '../../assets/images/badge-1.svg'
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg'
import { ReactComponent as Arrow } from '../../assets/icons/rightArrow.svg'

function Responsive() {
  const [print,setPrint] = useState(false);
  const [integration,setIntegration] = useState(false);
  const [selling,setSelling] = useState(false);
  const [company,setCompany] = useState(false);

  const handleClick = (dropdown) => {
    setPrint(dropdown === "print" ? !print : false);
    setIntegration(dropdown === "integration" ? !integration : false);
    setSelling(dropdown === "selling" ? !selling : false);
    setCompany(dropdown === "company" ? !company : false);
  };
  return (
    <div className='lg:hidden bg-black px-[1.5rem] py-[2rem]'>
      <div className='flex items-center justify-between'>
        {/* logo */}
        <div>
            <img className='w-[8rem] lg:w-[10rem]' src={logo} alt="logo" />
        </div>
      </div>

      <div>
          <p className='text-white font-light text-xs'>Gelato has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.</p>
          <button className='bg-white px-3 py-2 text-sm rounded-full mt-[1rem]'>Get started</button>
      </div>
      {/* content */}
      <div className='mt-6 text-white text-xl font-myFont font-medium flex flex-col gap-4'>
        {/* print */}
        <div>
          <button className='flex justify-start' onClick={() => handleClick("print")}><Arrow/>Print on demand</button>
          {print && 
            <div className="flex flex-col gap-3 pt-3 ml-[1rem]">
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
          }
        </div>
        {/* integration */}
        <div>
          <button className='flex justify-start' onClick={() => handleClick("integration")}><Arrow/>Integrations</button>
          {integration && 
            <div className="flex flex-col gap-3 pt-3 ml-[1rem]">
              <p className='text-xs font-normal mt-2'>Shopify</p>
              <p className='text-xs font-normal'>Etsy</p>
              <p className='text-xs font-normal'>WooCommerce</p>
              <p className='text-xs font-normal'>Wix</p>
              <p className='text-xs font-normal'>Squarespace</p>
              <p className='text-xs font-normal'>BigCommerce</p>
              <p className='text-xs font-normal'>API</p>
            </div>
          }
        </div>
        {/* selling */}
        <div>
          <button className='flex justify-start' onClick={() => handleClick("selling")}><Arrow/>Start Selling</button>
          {selling && 
            <div className="flex flex-col gap-3 pt-3 ml-[1rem]">
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
          }
        </div>
        {/* company */}
        <div>
          <button className='flex justify-start' onClick={() => handleClick("company")}><Arrow/>Print on demand</button>
          {company && 
            <div className="flex flex-col gap-3 pt-3 ml-[1rem]">
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
          }
        </div>
      </div>
      {/* app */}
      <div>
        <p className='mt-[2.5rem] text-white'>Get the app</p>
        <div className='flex items-center gap-3 mt-3'>
          <img src={ios} alt="ios" />
          <img src={googleplay} alt="googleplay" />
        </div>
      </div>
      {/* social handles */}
      <div className='flex flex-col justify-evenly gap-[1.5rem] mt-[2rem]'>
        <p className='font-normal text-white'>Find Gelato on:</p>
        <div className='flex gap-6'>
          <Instagram/>
          <Instagram/>
          <Instagram/>
          <Instagram/>
          <Instagram/>
        </div>
      </div>

      {/* tnc */}
      <div className='mt-[2rem]'>
        <p className='border-2 w-[13rem] px-2 py-2 text-white'>English(India)</p>
      </div>
      <div className='text-white flex flex-col gap-4 mt-3 text-sm'>
        <p>Contact Us</p>
        <p>Legal</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>API terms</p>
        <p>Sitemap</p>
      </div>

    </div>
  )
}

export default Responsive
