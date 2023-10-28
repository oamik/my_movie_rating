import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    const apiKey = '292e33b0c4232942b8105a33d297914d';
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    setMovies(data.results);
  }

  return (
    <div className="App">
      <h1>My Movie Rating App</h1>
      <SearchForm onSubmit={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
