import default_poster from '../img/default.jpeg'

const generateImgSrc = (path) => {
    if (!path) return default_poster
    const siteName = `https://image.tmdb.org/t/p/w300`;
    return `${siteName}${path}`;
}
const MovieCard = ({ title, year, overview, poster_path }) => {
    return (
        <div className="movie-card">
            <div className="movie-card-inner">
                <div className="movie-card-front">
                    <img src={generateImgSrc(poster_path)} alt={title} />
                </div>
                <div className="movie-card-back">
                    <h4>{title}</h4>
                    <h5>{year}</h5>
                    {/* <h5>{year ? year : ""}</h5> */}
                    <div className='overview'>
                        {overview}
                    </div>
                </div>
            </div >
        </div >
    );
}

export default MovieCard;
