import { useEffect, useState } from "react";
import { useParams, useLocation, Link, NavLink, Outlet } from "react-router-dom";
import { getMovieDetails } from "../../services/tmdb";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();

  // Back link
  const backLink = location.state?.from || "/movies";

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  if (!movie) return null;

  return (
    <div>
      {/* Back button */}
      <Link to={backLink}>← Go back</Link>

      {/* Movie title */}
      <h2>{movie.title}</h2>

      {/* Movie image */}
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300"
        />
      )}

      {/* Overview */}
      <p>{movie.overview}</p>

      {/* Navigation */}
      <nav>
        <NavLink to="cast">Cast</NavLink>{" | "}
        <NavLink to="reviews">Reviews</NavLink>
      </nav>

      {/* Nested content */}
      <Outlet />
    </div>
  );
}