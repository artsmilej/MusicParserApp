import axios from 'axios';

export const fetchTracks = async (query) => {
    try {
        const response = await axios.get(`https://api.deezer.com/search?q=${query}`);
        return response.data.data; // повертає масив треків
    } catch (error) {
        console.error("Error fetching tracks:", error);
        return [];
    }
};