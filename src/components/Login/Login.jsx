import React from 'react';

import './Login.sass';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
      return (
        <div className="Login">
          <div className="Login__Wrap">
            <input type="text" className="Login__Email Login__Input" placeholder="Email"/>
            <input type="password" className="Login__Pass Login__Input" placeholder="Password"/>
            <input type="submit" className="Login__Submit"/>
            <p className="Login__Description">Don't have account?
              <Link to="/register" className="Login__Register">Register</Link>
            </p>
          </div>
        </div>
      )
    }
}

export default Login;
