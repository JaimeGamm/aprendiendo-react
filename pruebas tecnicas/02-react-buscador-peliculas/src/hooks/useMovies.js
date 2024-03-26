import { useMemo, useRef, useState } from "react";
import { searchMovies } from "../services/movies.js";
import { Movies } from "../components/Movies.jsx";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useMemo(() => {
    return async () => {
      if (search === previousSearch.current) return;

      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const newMovies = await searchMovies({ search });
        setMovies(newMovies);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
  }, [search]);

  //const sortedMovies = sort
  //  ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //  : movies;

  const sortedMovies = useMemo(() => {
    console.log("memo");
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading };
}
