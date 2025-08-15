import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar'; // Fix the import path
import Player from './components/Player'; // Fix the import path

const App = () => {
    return (
        <div className='h-screen bg-black'>
            <div className='h-[90%] flex'>
                <Sidebar />
                <Display />
            </div>
            <Player/>
        </div>
    )
}
export default App;
