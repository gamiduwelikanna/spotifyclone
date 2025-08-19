import React, { useContext } from 'react';
import { assets, songsData } from '../assets/frontend-assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { seekBar, seekBg, playStatus, play, pause } = useContext(PlayerContext);

  return (
    <div className='h-[90px] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt={songsData[0].name} />
        <div>
          <p>{songsData[0].name}</p>
          <p className='text-gray-400'>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer hover:scale-110' src={assets.shuffle_icon} alt='shuffle' />
          <img className='w-4 cursor-pointer hover:scale-110' src={assets.prev_icon} alt='previous' />
          {playStatus ? (
            <img 
              className='w-4 cursor-pointer hover:scale-110' 
              src={assets.pause_icon} 
              alt='pause'
              onClick={pause}
            />
          ) : (
            <img 
              className='w-4 cursor-pointer hover:scale-110' 
              src={assets.play_icon} 
              alt='play'
              onClick={play}
            />
          )}
          <img className='w-4 cursor-pointer hover:scale-110' src={assets.next_icon} alt='next' />
          <img className='w-4 cursor-pointer hover:scale-110' src={assets.loop_icon} alt='loop' />
        </div>

        <div className='flex items-center gap-5'>
          <p className='text-xs text-gray-400'>1:06</p>
          <div 
            ref={seekBg} 
            className='w-[60vw] max-w-[500px] h-1 bg-gray-600 rounded-full cursor-pointer'
          >
            <div 
              ref={seekBar} 
              className='h-full bg-white hover:bg-green-500 rounded-full transition-all'
              style={{ width: '20%' }}
            ></div>
          </div>
          <p className='text-xs text-gray-400'>3:20</p>
        </div>
      </div>

      <div className='hidden lg:flex items-center gap-2'>
        <img className='w-4 cursor-pointer hover:opacity-80' src={assets.plays_icon} alt='playlist' />
        <img className='w-4 cursor-pointer hover:opacity-80' src={assets.mic_icon} alt='microphone' />
        <img className='w-4 cursor-pointer hover:opacity-80' src={assets.queue_icon} alt='queue' />
        <img className='w-4 cursor-pointer hover:opacity-80' src={assets.speaker_icon} alt='speaker' />
        <img className='w-4 cursor-pointer hover:opacity-80' src={assets.volume_icon} alt='volume' />
        <div className='w-20 bg-gray-600 h-1 rounded-full'>
          <div className='h-full w-1/2 bg-white hover:bg-green-500 rounded-full'></div>
        </div>
        <img className='w-4 cursor-pointer hover:opacity-80' src={assets.mini_player_icon} alt='mini player' />
        <img className='w-4 cursor-pointer hover:opacity-80' src={assets.zoom_icon} alt='zoom' />
      </div>
    </div>
  );
};

export default Player;
