import React, {useEffect, useState} from 'react';
import Loader from '../components/loader/loader';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './movie_lists.module.css';

const LatestMovies = ({movieAPI}) => {
  const [recentMovies, setRecentMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieAPI
      .movieListAll() //
      .then((movies) => {
        setRecentMovies(movies[2]);
        setLoading(false);
      });
  }, [movieAPI]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default LatestMovies;
