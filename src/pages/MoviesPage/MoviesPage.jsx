import { useState } from 'react';
import { searchMovies } from '../../api/api';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    searchMovies(query).then(setMovies);
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
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
