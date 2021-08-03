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


  return (
    <div className="footer">
      <div className="footer_left">
        <img className="footer_albumLogo" src='https://i1.sndcdn.com/artworks-WDc2cBhLIdjq-0-t500x500.jpg' alt='' />
        <div className='footer_songInfo'>
            <h4>Disco Inferno</h4>
            <p>50 Cent</p>
        </div>
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
