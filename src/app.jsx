import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Detail from './routes/detail';
import Home from './routes/home';

const App = ({movieAPI}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/movie' element={<Detail />} />
        <Route path='/' element={<Home movieAPI={movieAPI} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
