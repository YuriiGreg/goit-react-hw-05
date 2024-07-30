import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryFromParams = searchParams.get('query') || '';
    setQuery(queryFromParams);
    if (queryFromParams) {
      searchMovies(queryFromParams)
        .then(setMovies)
        .catch(setError);
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams({ query });
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div className={styles.error}>Something went wrong: {error.message}</div>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;

