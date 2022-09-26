import React, {useEffect, useState} from 'react';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './movie_lists.module.css';

const PopularMovies = ({movieAPI}) => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    movieAPI
      .movieListAll() //
      .then((movies) => setPopularMovies(movies[0]));
  }, [movieAPI]);
  return (
    <>
      <Navigation />
      <ul className={styles.list}>
        {popularMovies.map((movie) => (
          <MovieList
            key={movie.id}
            id={movie.id}
            title={movie.title}
            cover={movie.medium_cover_image}
            year={movie.year}
          />
        ))}
      </ul>
    </>
  );
};

export default PopularMovies;
