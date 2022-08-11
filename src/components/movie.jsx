import React from 'react';

const Movie = ({title, cover, year, runtime, genres}) => {
  return (
    <li>
      <h2>{title}</h2>
      <img src={cover} alt='thumbnail' />
      <p>Year: {year}</p>
      <p>Runtime: {`${Math.floor(runtime / 60)}h ${runtime % 60}m`}</p>
      <p>Genres: {genres}</p>
    </li>
  );
};

export default Movie;
