import React from 'react';
import './Body.css';
import Header from './Header';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img src='' alt=''></img>
                <div className="body_infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>description..</p>
                </div>
            </div>
        </div>
    )
}

export default Body
