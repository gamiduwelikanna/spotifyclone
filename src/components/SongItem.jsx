import React from 'react'

const SongItem = ({name,image,desc, id}) => {
  return (
    <div className="min-w-[200px] max-w-[200px] bg-[#181818] p-4 rounded-lg cursor-pointer hover:bg-[#282828] mr-4">
      <img src={image} alt={name} className="w-full rounded-lg mb-4" />
      <p className="text-white font-bold mb-2">{name}</p>
      <p className="text-white text-sm">{desc}</p>
    </div>
  )
}

export default SongItem
