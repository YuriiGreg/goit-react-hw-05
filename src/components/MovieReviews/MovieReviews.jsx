import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../api/api';
import styles from './MovieReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className={styles.container}>
      {reviews.map(review => (
        <div key={review.id} className={styles.review}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieReviews;
