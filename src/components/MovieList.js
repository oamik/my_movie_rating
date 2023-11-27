import React from "react";
import MovieCard from "./MovieCard";
import "../App.css"

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list-container">
            {movies.length ?
                movies
                    .sort((m1, m2) => {
                        return m2.popularity - m1.popularity;
                    })
                    .map((movie) => (
                        <MovieCard key={movie.id} year={new Date(movie.release_date).getFullYear()} {...movie} />
                    ))
                : <h2> No Results</h2>
            }
        </div>
    );
};

export default MovieList;
