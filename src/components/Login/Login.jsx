import React from 'react';

import './Login.sass';
import {Link, withRouter} from 'react-router-dom';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const LoginPage = ({allowedRoute}) => {
  return(
    <LoginForm alowedRoute={allowedRoute}/>
  );
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleLoginSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push('/home');
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  };
  handleLoginChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, errors } = this.state;
    const isInvalid = password ==='' || email === '';

    return (
      <div className="Login">
        <div className="Login__Wrap">
          <form className="Login__Form" onSubmit={this.handleLoginSubmit}>
            <input type="text"
                   className="Login__Email Login__Input"
                   placeholder="Email"
                   name="email"
                   value={email}
                   onChange={this.handleLoginChange}

            />
            <input type="password"
                   className="Login__Pass Login__Input"
                   placeholder="Password"
                   name="password"
                   value={ password }
                   onChange={this.handleLoginChange}
              />
            <input type="submit"
                   className="Login__Submit"
                   disabled={isInvalid}
            />
            <p className="Login__Description">Don't have account?
              <Link to="/register" className="Login__Register">Register</Link>
            </p>
            {errors && <p>{errors.message}</p>}
          </form>
        </div>
      </div>
    )
  }
}

const LoginForm = withRouter(withFirebase(Login ));


export default LoginPage;
