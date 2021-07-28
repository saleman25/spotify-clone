import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateProviderValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  
  const [{ user }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user)
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        })
      })

      spotify.getPlaylist('37i9dQZF1EpiVXU73rYrHv').then(response => {
        dispatch({
          type: "SET_ON_REPEAT",
          on_repeat: response,
        })
      })

    }
  }, [token, dispatch]);

console.log(user)

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* <Login /> */}
    </div>
  );
}

export default App;
