import React from 'react';
import {withFirebase} from "../Firebase";
import { withRouter} from 'react-router-dom';

import './LogOut.sass';

class LogOut extends React.Component {

  handleSignOut = () => {
   this.props.history.push('/');
   return  this.props.firebase.doSignOut();
  };

  render() {
    return (
      <button className="Logout__Btn" onClick={this.handleSignOut} />
    )
  }
}

export default withRouter(withFirebase(LogOut));
