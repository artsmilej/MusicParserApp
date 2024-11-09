import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SidebarMenu from './components/SidebarMenu';
import TrackList from './components/TrackList';
import AudioPlayer from './components/AudioPlayer';
import { fetchTracks } from './components/api'; // Імпортуємо функцію для отримання треків
import './App.css';

function App() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [tracks, setTracks] = useState([]);
    const [selectedTrack, setSelectedTrack] = useState(null);

    const genres = [
        { id: 1, name: 'Поп' },
        { id: 2, name: 'Рок' },
        { id: 3, name: 'Джаз' },
        { id: 4, name: 'Класика' },
        { id: 5, name: 'Хіп-Хоп' },
        { id: 6, name: 'Кантрі' },
        { id: 7, name: 'Латина' },
        { id: 8, name: 'Реггі' },
        { id: 9, name: 'Танцювальна' },
        { id: 10, name: 'Інструментальна' }
    ];

    const handleMenuClick = () => setSidebarOpen(!isSidebarOpen);

    // Викликається при виборі жанру
    const handleGenreClick = async (genre) => {
        const fetchedTracks = await fetchTracks(genre); // Використовуємо API для отримання треків
        setTracks(fetchedTracks); // Оновлюємо стан з новими треками
    };

    // Викликається при пошуку
    const handleSearch = async (query) => {
        const fetchedTracks = await fetchTracks(query); // Використовуємо API для пошуку треків
        setTracks(fetchedTracks); // Оновлюємо стан з результатами пошуку
    };

    // Завантажує треки за замовчуванням при першому завантаженні компонента
    useEffect(() => {
        const loadDefaultTracks = async () => {
            const fetchedTracks = await fetchTracks('Поп'); // Наприклад, завантажуємо "Поп" жанр за замовчуванням
            setTracks(fetchedTracks);
        };

        loadDefaultTracks();
    }, []); // Порожній масив залежностей означає, що цей `useEffect` виконається лише один раз при першому завантаженні

    const handleTrackClick = (track) => setSelectedTrack(track.preview);

    return (
        <div className="App">
            <Header onMenuClick={handleMenuClick} genres={genres} onGenreClick={handleGenreClick} />
            <SidebarMenu isOpen={isSidebarOpen} genres={genres} onSearch={handleSearch} onGenreClick={handleGenreClick} />
            <TrackList tracks={tracks} onTrackClick={handleTrackClick} />
            <AudioPlayer track={selectedTrack} />
        </div>
    );
}

export default App;