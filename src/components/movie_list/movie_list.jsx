import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../movie_list/movie_list.module.css';

const MovieList = ({id, title, cover, year}) => {
  return (
    <li className={styles.movielist}>
      <Link to={`/movie/${id}`}>
        <img src={cover} alt='thumbnail' className={styles.cover} />
        <h3 className={styles.movieTitle}>
          {title.length < 21 ? title : `${title.substring(0, 21)}...`}
        </h3>
        <p>{year}</p>
      </Link>
    </li>
  );
};

export default MovieList;
