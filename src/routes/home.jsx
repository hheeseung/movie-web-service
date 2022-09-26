import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Banner from '../components/banner/banner';
import Loader from '../components/loader/loader';
import MovieList from '../components/movie_list/movie_list';
import Navigation from '../components/navbar/navigation';
import styles from './home.module.css';

const Home = ({movieAPI}) => {
  const navigate = useNavigate();
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
            <h2
              className={styles.title}
              onClick={() => navigate('/movie/popular_movies')}
            >
              Most Popular Movies →
            </h2>
            <ul className={styles.contents}>
              {popularMovies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover={movie.medium_cover_image}
                  year={movie.year}
                  rating={movie.rating}
                />
              ))}
            </ul>
          </section>
          <section className={styles.movieList}>
            <h2
              className={styles.title}
              onClick={() => navigate('/movie/high_rated_movies')}
            >
              Highly Rated Movies →
            </h2>
            <ul className={styles.contents}>
              {highRatingMovies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover={movie.medium_cover_image}
                  year={movie.year}
                  rating={movie.rating}
                />
              ))}
            </ul>
          </section>
          <section className={styles.movieList}>
            <h2
              className={styles.title}
              onClick={() => navigate('/movie/latest_movies')}
            >
              Latest Movies →
            </h2>
            <ul className={styles.contents}>
              {recentMovies.map((movie) => (
                <MovieList
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  cover={movie.medium_cover_image}
                  year={movie.year}
                  rating={movie.rating}
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
