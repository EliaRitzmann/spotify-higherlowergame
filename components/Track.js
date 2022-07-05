import React from 'react'

export const Track = (props) => {
  return (
    <div className='flex flex-col items-center w-64 h-80'>
        <div>
            <img className='w-64' src={props.track?.album.images[0].url} alt="" />
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-xl font-semibold text-center'>{props.track?.name}</h1>
            <h1 className='text-lg'>{props.track?.artists[0].name}</h1>
        </div>
    </div>
  )
}
