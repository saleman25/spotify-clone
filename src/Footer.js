import React, { useEffect, useState } from "react";
import { useStateProviderValue } from './StateProvider';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer({ spotify }) {

  // i'm going to need to add functunality here for the buttons 
  // so that i can actually skip/goback/play/pause
  // i'm going to need to set ??? new cases for dispatch?
  // i need to refactor the div for the now playing so that it updates accordingly

  const [{ token, item, playing }, dispatch] = useStateProviderValue();
 
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log(r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      })
    })
  }, [spotify]);

  // handle play and pausing
  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  // handle skipping song
  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      console.log(r);
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  // handle going back to previous
const skipPrevious = () => {
  spotify.skipToPrevious();
  spotify.getMyCurrentPlayingTrack().then((r) => {
    console.log(r);
    dispatch({
      type: "SET_ITEM",
      item: r.item,
    })
    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
  });
};


  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" 
        src={item?.album.images[0].url} 
        alt={item?.name} />

        {item ? (
        <div className='footer_songInfo'>
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
        </div>
        ) : (
          <div className='footer_songInfo'>
              <h4>No song is playing</h4>
              <p>...</p>
          </div>
        )}
      </div>

      <div className="footer_center">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className='footer_icon' />
        <PlayCircleOutlineIcon fontSize='large' className='footer_icon' />
        <SkipNextIcon className="footer_icon" />
        <RepeatIcon className="footer_green" />

      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
            <Grid item>
                <PlaylistPlayIcon />
            </Grid>
            <Grid item>
                <VolumeDownIcon />
            </Grid>
            <Grid item xs>
                <Slider aria-labelledby="continuous-slider" />
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
