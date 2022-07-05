import React, { useEffect, useState } from 'react'

export const Playlist = (props) => {
    const [playlist, setPlaylist] = useState()

    useEffect(() => {
        async function getPlaylist(playlist_id) {
            const res = await fetch(
              "/api/getPlaylist?playlist_id=" + playlist_id
            );
            const play = await res.json();
            setPlaylist(play)
            
          }

        getPlaylist(props.playlist_id)

    }, [])
    

    console.log(playlist)

  return(
    <div className='flex gap-1 justify-end items-center w-1/4 '>
        <img src={playlist?.images[0]?.url} className="w-12" alt="" />
        <h1 className='text-xl font-semibold'>{playlist?.name}</h1>
    </div>
  )
}
