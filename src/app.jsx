import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Detail from './routes/detail';
import Home from './routes/home';

const App = ({movieAPI}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/movie'>
          <Detail />
        </Route>
        <Route path='/'>
          <Home movieAPI={movieAPI} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
