import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/frontend-assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/frontend-assets/assets';



const DisplayHome = () => {
  return (
    <div className='px-6 pt-4'>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl text-white'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((item,index)=>(<AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
        </div>
      </div> 

      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl text-white'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
        </div>
      </div>

    </div>
  );
};

export default DisplayHome;
