import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../movie_list/movie_list.module.css';

const MovieList = ({id, title, cover, year, rating, handleImgError}) => {
  return (
    <li className={styles.movielist}>
      <Link to={`/movie/${id}`}>
        <img
          src={cover}
          alt='thumbnail'
          className={styles.cover}
          onError={handleImgError}
        />
        <h6 className={styles.movieTitle}>
          {title.length < 21 ? title : `${title.substring(0, 21)}...`}
        </h6>
        <p className={styles.movieYear}>{year}</p>
        <p className={styles.movieRate}>
          <i className='fa-solid fa-star'></i>&nbsp;
          {rating}
        </p>
      </Link>
    </li>
  );
};

export default MovieList;
