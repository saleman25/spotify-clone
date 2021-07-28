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
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                    {on_repeat?.tracks.items.map((item) => (
                        <SongRow track={item.track} />
                        ))}
            </div>
        </div>
    )
}

export default Body
