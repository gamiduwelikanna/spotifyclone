import React from 'react';
import { assets } from '../assets/frontend-assets/assets';

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white bg-[#121212]">
    
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.home_icon} alt="Home" className="w-6" /> 
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img src={assets.search_icon} alt="Search" className="w-6 h-6" /> 
          <p className="font-bold">Search</p>
        </div>
      </div>
      
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6 h-6" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className="w-4" src={assets.arrow_icon}/>
            <img className="w-4" src={assets.plus_icon}/>
          </div>
        </div>
        <div className='p-4  bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>It's easy. We will help your</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4  bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
            <h1>Let's find some podcasts to follow</h1>
            <p className='font-light'>WE'll kepp you updated on new episodes</p>
            <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browsw Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;