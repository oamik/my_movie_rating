import React from "react";
import MovieCard from "./MovieCard";
import "../App.css"

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list-container">
            {movies.length ?
                movies
                    .sort((a, b) => {
                        const yearA = new Date(a.release_date).getFullYear();
                        const yearB = new Date(b.release_date).getFullYear();
                        return yearB - yearA;
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
