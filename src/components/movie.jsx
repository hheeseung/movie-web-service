import React from 'react';
import {Link} from 'react-router-dom';

const Movie = ({title, cover, year, runtime, genres}) => {
  return (
    <li>
      <Link to='/movie'>
        <h2>{title}</h2>
      </Link>
      <img src={cover} alt='thumbnail' />
      <p>Year: {year}</p>
      <p>Runtime: {`${Math.floor(runtime / 60)}h ${runtime % 60}m`}</p>
      <p>Genres: {genres}</p>
    </li>
  );
};

export default Movie;
