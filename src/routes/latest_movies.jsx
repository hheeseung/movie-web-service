import React, {useEffect, useState} from 'react';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './movie_lists.module.css';

const LatestMovies = ({movieAPI}) => {
  const [recentMovies, setRecentMovies] = useState([]);

  useEffect(() => {
    movieAPI
      .movieListAll() //
      .then((movies) => setRecentMovies(movies[2]));
  }, [movieAPI]);
  return (
    <>
      <Navigation />
      <ul className={styles.list}>
        {recentMovies.map((movie) => (
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

export default LatestMovies;
