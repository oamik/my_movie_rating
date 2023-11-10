const generateImgSrc = (path) => {
    // const siteName = `https://image.tmdb.org/t/p/w185`;
    const siteName = `https://image.tmdb.org/t/p/w300`;
    return `${siteName}${path}`;
}
const MovieCard = ({ title, release_date, overview, poster_path }) => {
    return (
        <div className="movie-card">
            <img src={generateImgSrc(poster_path)} alt={title} />
            <h3>{title}</h3>
            <p>Release Date: {release_date}</p>
            {/* <p>{overview}</p> */}
        </div>
    );
}

export default MovieCard;
