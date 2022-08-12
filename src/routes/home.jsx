import React, {useEffect, useState} from 'react';
import MovieList from '../components/movie_list/movie_list';

const Home = ({movieAPI}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI
      .movieList() //
      .then((movies) => setMovies(movies));
  }, [movieAPI]);

  return (
    <ul>
      {movies.map((movie) => (
        <MovieList
          key={movie.id}
          id={movie.id}
          title={movie.title}
          cover={movie.medium_cover_image}
          year={movie.year}
        />
      ))}
    </ul>
  );
};

export default Home;
