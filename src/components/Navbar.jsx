import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'></div>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt='' />
            
        </div>
    </>
  )
}

export default Navbar
