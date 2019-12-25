import React, {Component} from 'react';

import './UserList.sass';

class UserList extends Component {

  render() {
    let index = 1;

    return (
      <div className="List">
        <h3 className="List__Title">User List</h3>
        <ul className="List__Users">
          {this.props.users.map(user => (
            <li className="List__Elem" key={user.uid}>
              <div className="List__Index">{index++}.</div>
              <div className="List__Box">
                <div className="List__Item">
                  <strong className="List__Accent">ID:</strong> {user.uid}
                </div>
                <div className="List__Item">
                  <strong className="List__Accent">E-Mail:</strong> {user.email}
                </div>
                <div className="List__Item">
                  <strong className="List__Accent">Username:</strong> {user.username}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default UserList;
