import React from 'react';
import { Link } from 'react-router-dom'

import './Register.sass';

class Register extends React.Component{
  render() {
    return (
      <div className="Register">
        <div className="Register__Wrap">
          <input type="text" className="Register__Name Register__Input" placeholder="Name"/>
          <input type="text" className="Register__Email Register__Input" placeholder="Email"/>
          <input type="password" className="Register__Pass Register__Input" placeholder="Password"/>
          <input type="submit" className="Register__Submit"/>
          <p className="Register__Description"> Already have account?
            <Link to="/" className="Register__Login">Login</Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Register;
