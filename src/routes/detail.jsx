import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
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
        <>
          <Header />
          <MovieDetail
            title={movie.title_long}
            thumbnail={movie.medium_cover_image}
            rating={movie.rating}
            runtime={movie.runtime}
            genres={movie.genres}
            likes={movie.like_count}
            description={movie.description_full}
          />
          <Footer />
        </>
      )}
    </>
  );
};

export default Detail;
