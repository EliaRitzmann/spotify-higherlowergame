import { useEffect, useState } from "react";
import { Track } from "../components/Track";

export default function Home() {
  const [songs, setSongs] = useState(["", ""]);
  const [score, setScore] = useState(0);

  async function getSong() {
    //fetch new raandom song and provide old song so there are no dublicates
    const res = await fetch(
      "/api/getsong?oldsong=" +
        songs[1]?.track?.id +
        "&playlist_id=37i9dQZEVXbMDoHDwVN2tF"
    );
    const newsong = await res.json();
    setSongs([songs[1], newsong]);
  }

  function startGame(){
    getSong()
  }

  function guess(higher){
      console.log(songs[1].track.popularity)
      console.log(songs[0].track.popularity)

      if(higher && songs[1].track.popularity >= songs[0].track.popularity){
        
        setScore((prev) => setScore(prev + 1))
        getSong();
      }else if(!higher && songs[1].track.popularity <= songs[0].track.popularity){
        setScore((prev) => setScore(prev + 1))
        getSong();
      }else{
        setScore(0)
        setSongs(["", ""])
      }
      
  }

  console.log(songs);

  return (
    <div className="p-5">
      <div className="w-full flex justify-between mb-20 items-center">
      <h1 className="text-4xl font-semibold">Score: {score}</h1>
      
      <h1 className="flex gap-1 text-3xl font-semibold">The <h1 className="text-green-500 font-bold">higher</h1>/<h1 className="text-red-500 font-bold" >lower</h1> game.</h1>
      <h1>PlayList: ushdkaj</h1>
      </div>
      

      {songs[0] ? (
        <div className="flex items-center justify-center gap-10">

          {/*Song 1 */}
          <div className="flex flex-col gap-1">
          <div className="h-24 flex justify-center items-center gap-1 ">
              <h1 className="text-2xl ">Popularity:</h1>
              <h1 className="text-2xl font-semibold">
                {songs[0].track.popularity}
              </h1>
            </div>
            <Track track={songs[0].track}></Track>
          </div>



          {/*middle*/}
          <div className="flex flex-col w-44 gap-4">
            <div className="flex flex-col justify-center items-center text-lg">
              <h1>Is</h1>
              <h1 className="font-semibold text-center">{songs[1].track.name}</h1>
               <h1>more popular than</h1>
               <h1 className="font-semibold text-center">{songs[0].track.name} ?</h1>
            </div>
           
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => guess(true)}>
                yes
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => guess(false)}>
                no
              </button>
          </div>

          {/*Song 2 */}
          <div className="flex flex-col gap-1">
          
            <div className="h-24 flex justify-center items-center gap-1 ">
              <h1 className="text-2xl ">Popularity:</h1>
              <h1 className="text-2xl font-semibold">
                ?
              </h1>
            </div>
            <Track track={songs[1].track}></Track>
          </div>
        </div>
      ) : (
        <button onClick={startGame}>start game</button>
      )}
      <button onClick={getSong}>addsong</button>
    </div>
  );
}


{ /*
               <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center justify-evenly">
                <span>higher</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center justify-evenly">
                <span>lower</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  />
                </svg>
              </button>
               */}