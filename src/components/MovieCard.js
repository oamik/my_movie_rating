// import default_poster from '../img/default_poster.jpg'
import default_poster from '../img/default.jpeg'

const generateImgSrc = (path) => {
    if (!path) return default_poster
    const siteName = `https://image.tmdb.org/t/p/w300`;
    return `${siteName}${path}`;
}
const MovieCard = ({ title, year, overview, poster_path }) => {
    return (
        <div className="movie-card">
            <img src={generateImgSrc(poster_path)} alt={title} />
            <div className='info'>
                <p>{title}</p>
                <p>{year}</p>
            </div>
            {/* <p>{overview}</p> */}
        </div>
    );
}

export default MovieCard;
