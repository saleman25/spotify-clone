import React from 'react';
import './Body.css';
import Header from './Header';
import { useStateProviderValue } from './StateProvider';

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
                    <PlayCircleFilledIcon />
                    <FavoriteIcon />
                    <MoreHorizIcon />
                </div>
                {/* list of songs */}
            </div>
        </div>
    )
}

export default Body
