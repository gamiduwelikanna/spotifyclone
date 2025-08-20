import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Display from './components/Display';
import Player from './components/Player';
import './index.css';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className='h-screen bg-[#000000] overflow-hidden'>
      <div className='flex h-[calc(100vh-90px)] gap-2 p-2'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;

