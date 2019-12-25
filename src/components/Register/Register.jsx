import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { withFirebase } from '../Firebase';

import './Register.sass';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: null,
};

const RegisterPage = () => {
  return(
    <RegisterForm />
  )
};

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE }
  }

  handleSubmit = event => {
    const {username, email, password } = this.state;
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, password)
    .then(authUser => {
      return this.props.firebase
      .user(authUser.user.uid)
      .set({
        username,
        email,
      });
    })
    .then(authUser => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({ error });
    });
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    const { username, email , password, error} = this.state;
    const isInvalid = username === '' || email === '' || password === '';

    return (
      <div className="Register">
        <div className="Register__Wrap">
          <form className="Register__Form" onSubmit={this.handleSubmit}>
            <input type="text"
                   className="Register__Name Register__Input"
                   placeholder="Name"
                   name="username"
                   value={username}
                   onChange={this.handleChange}
            />
            <input type="text"
                   className="Register__Email Register__Input"
                   placeholder="Email"
                   name="email"
                   value={email}
                   onChange={this.handleChange}
            />
            <input type="password"
                   className="Register__Pass Register__Input"
                   placeholder="Password"
                   name="password"
                   value={password}
                   onChange={this.handleChange}
            />
            <input type="submit" className="Register__Submit" disabled={isInvalid}/>
            <p className="Register__Description"> Already have account?
              <Link to="/" className="Register__Login">Login</Link>
            </p>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </div>
    )
  }
}

const RegisterForm = withRouter(withFirebase(Register));

export default RegisterPage;
