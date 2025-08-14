import React from 'react';
import './index.css';
import Sidebar from './components/Sidebar'; // Fix the import path

const App = () => {
    return (
        <div className='h-screen bg-black'>
            <Sidebar />
        </div>
    )
}
export default App;
