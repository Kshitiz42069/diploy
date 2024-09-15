import React, { useState } from 'react'
import { ReactComponent as Headphones } from '../../assets/icons/headphones.svg'
import globe from '../../assets/icons/globe.svg'
import arrow from '../../assets/icons/arrow.svg'
import cart from '../../assets/icons/cart.svg'
import { ReactComponent as User } from '../../assets/icons/user.svg' 
function DesktopNavbar() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    { name: 'Products', subcategories: ['Best Seller', 'Man Clothing', 'Woman Clothing','Kids & baby Clothing','wall art','calender','cards'] },
    { name: 'Start Selling', subcategories: ['Print on demand', 'Setup your business','sell custom products','integrations','partner service'] },
    { name: 'Tools and Apps', subcategories: ['Tools & apps overview', 'Auto file sync','design maker','product creation tools','mockup studio','price navigator'] },
    { name: 'Pricing', subcategories: [] },
    { name: 'Resources', subcategories: ['Resource Center', 'Gelato Academy','Customer Stories'] },
    { name: 'Pro Sellers', subcategories: [] },
    { name: 'GelatoConnect', subcategories: ['GelatoConnect', 'Logistics','Workflow'] },
  ];

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null); // Hide the subcategory when the mouse leaves
  };
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
      {categories.map((category, index) => (
        <div
          key={index}
          className='relative'
          onMouseEnter={() => handleMouseEnter(category.name)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Category Button */}
          <div className='flex items-center justify-between hover:bg-[#E8E8E8] py-4 px-4'>
            <p className='text-sm font-medium'>{category.name}</p>
            {category.subcategories.length > 0 && (
              <img className='w-6 h-6 text-black' src={arrow} alt="arrow" />
            )}
          </div>

          {/* Subcategories - Visible only if hovered */}
          {hoveredCategory === category.name && category.subcategories.length > 0 && (
            <div className='absolute left-0 top-full bg-white w-[15rem] border shadow-lg'>
              {category.subcategories.map((sub, idx) => (
                <div key={idx} className='px-[2rem] font-medium text-sm py-4 hover:bg-gray-200 flex items-center justify-between'>
                  {sub}
                  <img className='w-6 h-6 text-black' src={arrow} alt="arrow" />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  )
}

export default DesktopNavbar