import React from "react";
import MovieCard from "./MovieCard";
import "../App.css"

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list-container">
            {movies.map((movie) => <MovieCard key={movie.id} {...movie} />)}
        </div>
    );
};

export default MovieList;
