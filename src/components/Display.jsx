import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/frontend-assets/assets';

const Display = () => {

  const displayRef = useRef();
  const location =  useLocation();
  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.slice(-1): " ";
  const bgColor = albumsData[Number(albumId)].bgColor;


  useEffect(()=>{
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor} , #121212`;
    }else {
      displayRef.current.style.background = `#121212`;
    }
  })

  return (
    <div ref={displayRef} className='flex-1 rounded-lg bg-[#121212] overflow-hidden'>
      <div className='h-full overflow-auto'>
        <Routes>
          <Route path='/' element={<DisplayHome />} />
          <Route path='/album/:id' element={<DisplayAlbum />} />
        </Routes>
      </div>
    </div>
  );
};

export default Display;
