import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/Login/Login';
import RegisterPage from './components/Register/Register';
import Home from './components/Home/Home';

import './App.sass';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ LoginPage }/>
        <Route path='/register' component={ RegisterPage }/>
        <Route path='/home' component={ Home }/>
      </Switch>
    </>
  );
}

export default App;
