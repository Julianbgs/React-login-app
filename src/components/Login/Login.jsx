import React from 'react';

import './Login.sass';

class Login extends React.Component{
    render() {
      return (
        <div className="Login">
          <div className="Login__Wrap">
            <input type="text" className="Login__Name"/>
            <input type="text" className="Login__Email"/>
            <input type="submit" className="Login__Submit"/>
            <p className="Login__Description">Don't have account?
              <a href="#" className="Login__Register">Register</a>
            </p>
          </div>
        </div>
      )
    }
}

export default Login;
