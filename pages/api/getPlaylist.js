import axios from "axios";
import qs from "qs"


export default async function handler(req, res) {
    const {playlist_id } = req.query;
    //get random song and return it
    var response = await getPlaylist(playlist_id)
    var playlist = await response.json()
    res.status(200).json(playlist)
  }

  //returns all songs from playlist
  const getPlaylist = async (playlist_id) => {
    //get access token
    const access_token = await getAuth()
    return fetch("https://api.spotify.com/v1/playlists/" + playlist_id, {
      headers: {
        Authorization: `Bearer ${access_token}`,    
      },
    });

  };


  //get access token from spotify (Client Credentials Flow)
  const getAuth = async () => {
    const client_id = process.env.SPOTIFY_CLIENT_ID;
    const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
    const auth_token = Buffer.from(`${client_id}:${client_secret}`, 'utf-8').toString('base64');

    try{
      //make post request to SPOTIFY API for access token, sending relavent info
      const token_url = 'https://accounts.spotify.com/api/token';
      const data = qs.stringify({'grant_type':'client_credentials'});
  
      const response = await axios.post(token_url, data, {
        headers: { 
          'Authorization': `Basic ${auth_token}`,
          'Content-Type': 'application/x-www-form-urlencoded' 
        }
      })
      //return access token
      return(response.data.access_token)
         
    }catch(error){
      //on fail, log the error in console
      console.log(error);
    }
  }
