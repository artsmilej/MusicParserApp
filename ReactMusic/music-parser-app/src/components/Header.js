import React from 'react';
import './Header.css';

const Header = ({ onMenuClick, genres, onGenreClick }) => {
    return (
        <header className="header">
            <div className="menu-icon" onClick={onMenuClick}>
                ☰
            </div>
            <h1 className="logo">MusicParser</h1>
            <nav className="genres">
                {genres.map((genre) => (
                    <button
                        key={genre.id}
                        onClick={() => onGenreClick(genre.name)}
                        className="genre-button"
                    >
                        {genre.name}
                    </button>
                ))}
            </nav>
        </header>
    );
};

export default Header;