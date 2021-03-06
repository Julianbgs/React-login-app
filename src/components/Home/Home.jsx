import React, {Component} from 'react';
import {withFirebase} from '../Firebase';
import UserList from '../UserList/UserList';
import LogOut from '../LogOut/LogOut';

import './Home.sass';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });

  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const {users, loading} = this.state;
    return (
      <div className="Home">
        <h1 className="Home__Title">Dashboard</h1>
        {loading && <div>Loading ...</div>}
        <UserList users={users} />
        <LogOut/>
      </div>
    );
  }
}

export default withFirebase(Home);
