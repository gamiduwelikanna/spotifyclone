import React from 'react';
import { assets } from '../assets/frontend-assets/assets';

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between w-full'>
      <div className='flex gap-2'>
        <button className='rounded-full bg-[#0A0A0A] p-2'>
          <img src={assets.arrow_left} alt="Previous" className='w-5 h-5' />
        </button>
        <button className='rounded-full bg-[#0A0A0A] p-2'>
          <img src={assets.arrow_right} alt="Next" className='w-5 h-5' />
        </button>
      </div>
      <div className='flex items-center  gap-4'>
        <p className='bg-white text-black text-[18px] px-4 py-1 rounded-full font-semibold hover:scale-105'>Explore Premium</p>
        <p className='bg-black text-white text-[18px] px-4 py-2 rounded-full font-semibold hover:scale-105'>Install App</p>
        <p className='bg-green-500 text-black px-3 py-1 font-bold rounded-full flex items-center justify-center'>G</p>
      </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <p className='bg-white text-black text-[18px] px-4 px-4 rounded-full font-semibold hover:scale-105'>All</p>
      <p className='bg-black text-white text-[18px] px-4 px-4 rounded-full font-semibold hover:scale-105'>Music</p>
    </div>
    </>
    
  );
};

export default Navbar;
