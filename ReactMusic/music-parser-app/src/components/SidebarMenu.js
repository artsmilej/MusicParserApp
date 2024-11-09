import React from 'react';
import './SidebarMenu.css';

const SidebarMenu = ({ isOpen, genres, onSearch, onGenreClick }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <input
                type="text"
                placeholder="Пошук..."
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className="sidebar-genres">
                {genres.map((genre) => (
                    <button
                        key={genre.id}
                        onClick={() => onGenreClick(genre.name)}
                        className="sidebar-genre"
                    >
                        {genre.name}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default SidebarMenu;