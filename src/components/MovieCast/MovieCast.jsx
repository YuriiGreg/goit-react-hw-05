import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../api/api';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className={styles.container}>
      {cast.map(actor => (
        <div key={actor.id} className={styles.actor}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
