import React from 'react';
import {Link} from 'react-router-dom';
import styles from './movie_list.module.css';

const MovieList = ({id, title, cover, year, runtime, genres}) => {
  return (
    <li>
      <img src={cover} alt='thumbnail' />
      <Link to={`/movie/${id}`}>
        <h2>
          {title} ({year})
        </h2>
        <p>→View More...</p>
      </Link>
    </li>
  );
};

export default MovieList;
