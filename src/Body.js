import React from 'react';
import './Body.css';
import Header from './Header';
import { useStateProviderValue } from './StateProvider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ on_repeat }, dispatch] = useStateProviderValue();

    // start integrating functunality to play songs
    // its going to be on this coponent where i'm going to need to 
    // set some function that actually updates the now playing song
    // i am only going to use the one playlist 

    // play the whole playlist
    const playPlaylist = (id) => {
        spotify
            .play({
                context_uri: `spotify:playlist:37i9dQZF1EpiVXU73rYrHv`,
            })
            .then((res) => {
                console.log(res)
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    }

    // play an idividual song
    const playSong = (id) => {
        spotify
            .play({
                uris: [`spotify:track:${id}`],
            })
            .then((res) => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    }



    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src={on_repeat?.images[0].url} alt=''></img>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>On Repeat</h2>
                    <p>{on_repeat?.description}</p>
                </div>
            </div>
            <div className="body_songs">
                <div className="body_icons">
                    <PlayCircleFilledIcon onClick={playPlaylist} className="body_shuffle" />

                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                    {on_repeat?.tracks.items.map((item) => (
                        <SongRow playSong={playSong} track={item.track} />
                        ))}
            </div>
        </div>
    )
}

export default Body
