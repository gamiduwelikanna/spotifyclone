import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, songsData, assets } from '../assets/frontend-assets/assets';

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  if (!albumData) {
    return <div className="px-6 pt-4 text-white">Album not found</div>;
  }

  return (
    <div className="px-6 pt-4 h-full">
      <Navbar />
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img src={albumData.image} alt={albumData.name} className='w-64 h-64 rounded-lg shadow-lg' />
        <div className='flex flex-col text-white'>
          <p>Playlist</p>
          <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
          <h4>{albumData.desc}</h4>
          <p className='mt-1 flex items-center gap-2'>
            <img className='w-5' src={assets.spotify_logo} alt='Spotify' />
            <b>Spotify</b>
            <span>132,678 likes</span>
            <b>50 songs</b>
            <span>about 5 hours 4 minutes</span>
          </p>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hidden sm:block'>Date Added</p>
        <div className='flex justify-center'>
          <img className='w-5 h-5' src={assets.clock_icon} alt='Duration' />
        </div>
      </div>

      <hr className='border-[#ffffff1a]'/>

      {songsData.map((item, index) => (
        <div 
          key={index} 
          className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'
        >
          <div className='flex items-center text-white'>
            <span className='mr-4 text-[#a7a7a7]'>{index + 1}</span>
            <img className='w-10 mr-5' src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
          <p>{albumData.name}</p>
          <p className='hidden sm:block'>2 days ago</p>
          <p className='text-center'>{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
