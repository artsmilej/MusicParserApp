import React from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './AudioPlayer.css';

const AudioPlayer = ({ track }) => {
    return (
        <div className="audio-player">
            {track ? (
                <ReactAudioPlayer src={track.audio} controls autoPlay />
            ) : (
                <ReactAudioPlayer controls />
            )}
        </div>
    );
};

export default AudioPlayer;