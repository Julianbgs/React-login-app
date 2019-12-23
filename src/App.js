import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from "./components/Register/Register";

import './App.sass';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ Login }/>
        <Route path='/register' component={ Register }/>
      </Switch>
    </>
  );
}

export default App;
