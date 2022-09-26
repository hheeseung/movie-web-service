import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Detail from './routes/detail';
import Home from './routes/home';
import './app.css';
import PopularMovies from './routes/popular_movies';
import HighRatedMovies from './routes/high_rated_movies';
import LatestMovies from './routes/latest_movies';

const DEFAULT_COVER = '/images/no-image-available.jpg';

const App = ({movieAPI}) => {
  const handleImgError = (e) => (e.target.src = DEFAULT_COVER);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/movie/latest_movies'
          element={
            <LatestMovies movieAPI={movieAPI} handleImgError={handleImgError} />
          }
        />
        <Route
          path='/movie/high_rated_movies'
          element={
            <HighRatedMovies
              movieAPI={movieAPI}
              handleImgError={handleImgError}
            />
          }
        />
        <Route
          path='/movie/popular_movies'
          element={
            <PopularMovies
              movieAPI={movieAPI}
              handleImgError={handleImgError}
            />
          }
        />
        <Route path='/movie/:id' element={<Detail movieAPI={movieAPI} />} />
        <Route
          path='/'
          element={<Home movieAPI={movieAPI} handleImgError={handleImgError} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
