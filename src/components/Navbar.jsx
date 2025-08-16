import React from 'react';
import { assets } from '../assets/frontend-assets/assets';

const Navbar = () => {
  return (
    <div className='flex items-center gap-4 w-full'>
      <div className='flex gap-2'>
        <button className='rounded-full bg-[#0A0A0A] p-2'>
          <img src={assets.arrow_left} alt="Previous" className='w-5 h-5' />
        </button>
        <button className='rounded-full bg-[#0A0A0A] p-2'>
          <img src={assets.arrow_right} alt="Next" className='w-5 h-5' />
        </button>
      </div>
      {/* Add other navbar items here */}
    </div>
  );
};

export default Navbar;
