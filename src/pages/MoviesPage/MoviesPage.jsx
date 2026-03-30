import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../services/tmdb";
import MovieList from "../../components/MovieList/MovieList";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  const query = params.get("query") || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    setParams({ query: value });
  };

  useEffect(() => {
    if (!query) return;
    searchMovies(query).then(setMovies);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
}