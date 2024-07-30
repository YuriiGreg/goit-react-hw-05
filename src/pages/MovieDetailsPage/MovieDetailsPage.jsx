import { useEffect, useState, Suspense, lazy, useRef } from 'react';
import { useParams, useNavigate, Routes, Route, Link, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../api/api';
import styles from './MovieDetailsPage.module.css';

const MovieCast = lazy(() => import('../../components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../../components/MovieReviews/MovieReviews'));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  const locationRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBack = () => {
    navigate(locationRef.current);
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={goBack}>Go back</button>
      <div className={styles.movieDetails}>
        <img
          className={styles.moviePoster}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className={styles.movieInfo}>
          <h1 className={styles.movieTitle}>{movie.title}</h1>
          <p className={styles.movieOverview}>{movie.overview}</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <Link to="cast" className={styles.link}>Cast</Link>
        <Link to="reviews" className={styles.link}>Reviews</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

