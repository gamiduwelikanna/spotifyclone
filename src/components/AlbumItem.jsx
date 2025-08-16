import React from 'react'

const AlbumItem = ({image,name,dec,id}) => {
  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='round' src={image} alt='' />
        <p className='font-bold mt-2 mb-1 text-white'>{name}</p>
        <p className='text-slate-200 text-sm'>{dec}</p>

      
    </div>
  )
}

export default AlbumItem
