import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Loader from '../components/loader/loader';
import MovieDetail from '../components/movie_detail/movie_detail';

const Detail = ({movieAPI}) => {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    movieAPI
      .movieDetail(id) //
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      });
  }, [id, movieAPI]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <MovieDetail
          title={movie.title_long}
          thumbnail={movie.medium_cover_image}
          rating={movie.rating}
          runtime={movie.runtime}
          genres={movie.genres}
          likes={movie.like_count}
          description={movie.description_full}
        />
      )}
    </>
  );
};

export default Detail;
