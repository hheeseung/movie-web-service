import React, {useEffect, useState} from 'react';
import Banner from '../components/banner/banner';
import Header from '../components/header/header';
import Loader from '../components/loader/loader';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './home.module.css';

const Home = ({movieAPI}) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [highRatingMovies, setHighRatingMovies] = useState([]);
  const [recentMovies, setRecentMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieAPI
      .movieList() //
      .then((movies) => {
        setPopularMovies(movies[0]);
        setHighRatingMovies(movies[1]);
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
          <Banner />
          <section className={styles.movieList}>
            <Header title={'Most Popular Movies'} />
            <ul className={styles.contents}>
              {popularMovies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover={movie.medium_cover_image}
                />
              ))}
            </ul>
          </section>
          <section className={styles.movieList}>
            <Header title={'Highly Rated Movies'} />
            <ul className={styles.contents}>
              {highRatingMovies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover={movie.medium_cover_image}
                />
              ))}
            </ul>
          </section>
          <section className={styles.movieList}>
            <Header title={'Latest Movies'} />
            <ul className={styles.contents}>
              {recentMovies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover={movie.medium_cover_image}
                />
              ))}
            </ul>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
