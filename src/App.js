import React, { useEffect, useState } from "react";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
  }

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    const fetchData = async () => {
      try {
        const response = await fetch(POPULAR_MOVIES_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <SearchForm onSubmit={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
