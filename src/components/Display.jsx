import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';

const Display = () => {
  return (
    <div className='flex-1 rounded-lg bg-[#121212] overflow-hidden'>
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
