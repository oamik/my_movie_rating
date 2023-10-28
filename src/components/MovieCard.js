const MovieCard = ({ title, release_date, overview }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>Release Date: {release_date}</p>
            <p>{overview}</p>
        </div>
    )
}

export default MovieCard;
