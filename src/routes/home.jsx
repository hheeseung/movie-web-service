import React, {useEffect, useState} from 'react';
import Movie from '../components/movie';

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
        <Movie
          key={movie.id}
          title={movie.title}
          cover={movie.medium_cover_image}
          year={movie.year}
          runtime={movie.runtime}
          genres={movie.genres.map((genre) => `${genre} `)}
        />
      ))}
    </ul>
  );
};

export default Home;
