import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Player from './components/Player';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <Player />
      </div>
    </BrowserRouter>
  );
};

export default App;
