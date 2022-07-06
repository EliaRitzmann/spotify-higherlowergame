import React from 'react'

export const Track = (props) => {
  return (
    <div className='flex flex-col items-center w-32 h-64 md:w-64 md:h-80'>
        <div>
            <img className='w-full' src={props.track?.album.images[0].url} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-lg font-semibold text-center'>{props.track?.name}</h1>
            <h1 className='text-lg text-center'>{props.track?.artists[0].name}</h1>
        </div>
    </div>
  )
}
