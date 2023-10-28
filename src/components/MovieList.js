import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => {
                return <MovieCard key={movie.id} {...movie} />
            })}
        </div>
    );
};

export default MovieList;
