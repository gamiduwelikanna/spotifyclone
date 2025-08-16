import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Player from './components/Player';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen bg-[#000000] overflow-hidden'>
        <div className='flex h-[calc(100vh-90px)] gap-2 p-2'>
          <Sidebar />
          <Display />
        </div>
        <Player />
      </div>
    </BrowserRouter>
  );
};

export default App;
