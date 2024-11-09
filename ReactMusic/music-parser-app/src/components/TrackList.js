import React from 'react';
import './TrackList.css';

const TrackList = ({ tracks, onTrackClick }) => {
    return (
        <div className="track-list">
            {tracks.map((track) => (
                <div
                    key={track.id}
                    className="track-item"
                    onClick={() => onTrackClick(track)}
                >
                    <img src={track.album.cover} alt={track.title} />
                    <p>{track.title}</p>
                    <p>{track.artist.name}</p>
                </div>
            ))}
        </div>
    );
};

export default TrackList;