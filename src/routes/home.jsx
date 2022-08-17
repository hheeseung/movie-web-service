import React, {useEffect, useState} from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Loader from '../components/loader/loader';
import MovieList from '../components/movie_list/movie_list';
import styles from './route.module.css';

const Home = ({movieAPI}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieAPI
      .movieList() //
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
          <Header />
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
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
