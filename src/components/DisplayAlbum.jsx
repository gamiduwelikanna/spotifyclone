import React from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets } from '../assets/frontend-assets/assets';

const DisplayAlbum = () => {

  const {id} = useParams();
  const albumData = albumsData[id];
   
  return (
    <div className="px-6 pt-4 h-full">
        <Navbar />
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
          <img src={albumData.image} className='w-64 h-64 rounded-lg shadow-lg' />
          <div className='flex flex-col text-white'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumData.desc}</h4>
            <p className='mt-1'>
              <img className='inline-block w-5' src={assets.spotify_logo} alt='' />
              <b> Spotify </b>
              132,678 likes
              <b> 50 songs </b>
              about 5 hours 4 minutes
            </p>
          </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
          <p><b className='mr-4'>#</b>Title</p>
          <p>Album</p>
          <p className='hidden sm:block'>Date Added</p>
          <img className='m-auto w-4' src={assets.clock_icon} alt='' />
        </div>
        <hr/>
        {
          songsData.map((item,index)=>(
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-4 mb-2 pl-2 hover:bg-[#1a1a1a] cursor-pointer'>
              <p className='text-[#a7a7a7]'><b className='mr-4'>{index + 1}</b>{item.title}</p>
              <p className='text-[#a7a7a7]'>{item.album}</p>
              <p className='hidden sm:block text-[#a7a7a7]'>{item.dateAdded}</p>
              <img className='m-auto w-4' src={assets.clock_icon} alt='' />
            </div>
          ))
        }
        
    </div>
  );
};

export default DisplayAlbum;
