import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import MovieAPI from './service/movieAPI';
import '@fortawesome/fontawesome-free/js/all.js';

const movieAPI = new MovieAPI();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App movieAPI={movieAPI} />
  </React.StrictMode>
);
