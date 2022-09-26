import React, {useEffect, useState} from 'react';
import Loader from '../components/loader/loader';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './movie_lists.module.css';

const HighRatedMovies = ({movieAPI, handleImgError}) => {
  const [highRatedMovies, setHighRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieAPI
      .movieListAll() //
      .then((movies) => {
        setHighRatedMovies(movies[1]);
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
          <h1 className={styles.title}>The Highly Rated Movies</h1>
          <ul className={styles.list}>
            {highRatedMovies.map((movie) => (
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

export default HighRatedMovies;
