import React, {useEffect, useState} from 'react';
import Header from '../components/header/header';
import Loader from '../components/loader/loader';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './route.module.css';

const Home = ({movieAPI}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieAPI
      .popularMovieList() //
      .then((movies) => {
        setMovies(movies);
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
          <div className={styles.popular__movies}>
            <Header title={'Most Popular Movies'} />
            <ul className={styles.contents}>
              {movies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover={movie.medium_cover_image}
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
