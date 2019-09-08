import React from 'react';
import {connect} from 'react-redux';

import {Button, Card, Select} from './ui';

import {setAuthUser} from '../actions/users';

import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {selectedUser: null};
  }

  doLogin = () => {
    if (this.state.selectedUser) {
      this.props.dispatch(setAuthUser(this.state.selectedUser));
      this.props.history.replace('/home');
    }
  };

  handleChange = evt => {
    this.setState({selectedUser: this.props.users[evt.target.value]});
  };

  render() {
    const {users} = this.props;
    return (
      <Card title="Login" className="login-card">
        <Select onChange={this.handleChange}>
          <option value={null}>Select a user</option>
          {Object.values(users).map(u => (
            <option value={u.id} key={u.id}>
              {u.name}
            </option>
          ))}
        </Select>

        <br />
        <br />
        <Button color="primary" onClick={this.doLogin}>
          Login
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
});

export default connect(mapStateToProps)(Login);
