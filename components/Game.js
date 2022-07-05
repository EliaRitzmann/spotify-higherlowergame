import React from 'react'
import { Track } from './Track'

export const Game = (props) => {
const songs = props.songs
const guess = props.guess
  return (
    <div className='flex flex-col justify-center items-center '>
        
        <div className="flex items-center w-full justify-evenly">
        

          {/*Song 1 */}
          <div className="flex flex-col gap-1">
          <div className="h-24 flex justify-center items-center gap-1 ">
              <h1 className="text-lg ">Popularity:</h1>
              <h1 className="text-lg font-semibold">
                {songs[0].track.popularity}
              </h1>
            </div>
            <Track track={songs[0].track}></Track>
          </div>


          {/*Song 2 */}
          <div className="flex flex-col gap-1">
          
            <div className="h-24 flex justify-center items-center gap-1 ">
              <h1 className="text-lg ">Popularity:</h1>
              <h1 className="text-lg font-semibold">
                ?
              </h1>
            </div>
            <Track track={songs[1].track}></Track>
          </div>

        </div>

        <div className="flex flex-col gap-6 mt-4 items-center">
            <div className="flex flex-col items-center">
              <h1>Is</h1>
              <h1 className="font-semibold text-center">{songs[1].track.name}</h1>
               <h1>more popular than</h1>
               <h1 className="font-semibold text-center">{songs[0].track.name} ?</h1>
            </div>
           
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-44 md:w-48" onClick={() => guess(true)}>
                yes
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-44 md:w-48" onClick={() => guess(false)}>
                no
              </button>
          </div>
    </div>
    
  )
}
