import { useState } from 'react';
import default_poster from '../img/default.jpeg'
import VideoModal from './VideoModal';

const generateImgSrc = (path) => {
    if (!path) return default_poster
    const siteName = `https://image.tmdb.org/t/p/w300`;
    return `${siteName}${path}`;
}
const MovieCard = ({ title, year, overview, poster_path, id }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [videoId, setVideoId] = useState(''); // Initialize videoId state

    // const videoUrl = 'https://www.youtube.com/watch?v=TD2OAoZfkIQ';
    const apiKey = process.env.REACT_APP_API_KEY;
    const TRAILER_URL = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`;

    const playVideo = async () => {
        try {
            const response = await fetch(TRAILER_URL);
            const data = await response.json();
            const newVideoId = data.results[0] ? data.results[0]["key"] : "TEMP_ID"
            // setVideoId(newVideoId);
            openModal();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className="movie-card">
            <div className="movie-card-inner">
                <div className="movie-card-front">
                    <img src={generateImgSrc(poster_path)} alt={title} />
                </div>
                <div className="movie-card-back">
                    <h4>{title}</h4>
                    <h5>{year ? year : null}</h5>
                    <div className='overview'>
                        {overview}
                    </div>
                </div>
            </div >
            <button onClick={playVideo}>Watch Trailer</button>
            <VideoModal isOpen={isModalOpen} onClose={closeModal} videoUrl={`https://www.youtube.com/watch?v=${videoId}`} />
        </div >
    );
}

export default MovieCard;
