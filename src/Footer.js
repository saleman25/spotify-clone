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
