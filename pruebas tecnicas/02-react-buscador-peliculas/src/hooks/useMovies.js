import { useState } from "react";
import withResults from "../mocks/with-results.json";
import withoutResults from "../mocks/No_results.json";

export function useMovies({ search }) {
  const [responseMovies, setResponseMovies] = useState([]);
  const movies = responseMovies.Search;

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));

  const getMovies = () => {
    if (search) {
      //setResponseMovies(withResults);
      fetch(`https://www.omdbapi.com/?apikey=8465b500&s=${search}`)
        .then((res) => res.json())
        .then((json) => {
          setResponseMovies(json);
        });
    } else {
      setResponseMovies(withoutResults);
    }
  };
  return { movies: mappedMovies, getMovies };
}
