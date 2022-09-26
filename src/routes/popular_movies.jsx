import React, {useEffect, useState} from 'react';
import Loader from '../components/loader/loader';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './movie_lists.module.css';

const PopularMovies = ({movieAPI, handleImgError}) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieAPI
      .movieListAll() //
      .then((movies) => {
        setPopularMovies(movies[0]);
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
          <h1 className={styles.title}>Most Popular Movies</h1>
          <ul className={styles.list}>
            {popularMovies.map((movie) => (
              <MovieList
                key={movie.id}
                id={movie.id}
                title={movie.title}
                cover={movie.medium_cover_image}
                year={movie.year}
                rating={movie.rating}
                handleImgError={handleImgError}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default PopularMovies;
