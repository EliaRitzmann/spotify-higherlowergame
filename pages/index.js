import { useState } from "react";

export default function Home() {
const [songs, setSongs] = useState(["", ""])

async function homie(){
  //fetch new raandom song and provide old song so there are no dublicates 
  const res = await fetch("/api/getsong?oldsong="+ songs[1].track.id + "&playlist_id=37i9dQZEVXbMDoHDwVN2tF");
  const newsong = await res.json();
  setSongs([songs[1], newsong])
}

  console.log(songs)

  return (
    <div >
      <h1>hallo</h1>
      <button onClick={homie}>get token</button>
    </div>
  )
}