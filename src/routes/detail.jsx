import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import MovieDetail from '../components/movie_detail/movie_detail';

const Detail = ({movieAPI}) => {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    movieAPI
      .movieDetail(id) //
      .then((movie) => setMovie(movie));
  }, [id, movieAPI]);

  return <MovieDetail title={movie.title} />;
};

export default Detail;
