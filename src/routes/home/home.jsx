import React, {useEffect, useState} from 'react';
import Header from '../../components/header/header';
import MovieList from '../../components/movie_list/movie_list';
import styles from './home.module.css';

const Home = ({movieAPI}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI
      .movieList() //
      .then((movies) => setMovies(movies));
  }, [movieAPI]);

  return (
    <div className={styles.container}>
      <Header
        title={'Movie Web Rating Service'}
        description={
          'This site allows you to view ratings and information about the top 50 movies on the YTS site.'
        }
      />
      <section>
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
      </section>
    </div>
  );
};

export default Home;
