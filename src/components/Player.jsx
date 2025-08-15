import React from 'react'
import { assets, songsData } from '../assets/frontend-assets/assets';

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt='' />
        <div>
          <p>{songsData[0].name}</p>
          <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-cemter gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='shuffle' />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt='previous' />
          <img className='w-4 cursor-pointer' src={assets.play_icon} alt='play' />
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt='next' />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='loop' />
        </div>

      </div>
      {/* You can add play/pause controls here */}
    </div>
  );
}

export default Player;
