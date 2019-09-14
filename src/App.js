import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';

import ProtectedRoute from './components/ProtectedRoute';
import RedirectControl from './components/RedirectControl';
import Login from './components/Login';
import Home from './components/Home';
import QuestionForm from './components/QuestionForm';
import QuestionDetail from './components/QuestionDetail';
import Leaderboard from './components/Leaderboard';
import {Container, NavBar} from './components/ui';

import {loadInitialData} from './actions/shared';
import {setAuthUser} from './actions/users';

import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.loading && this.props.dispatch(loadInitialData());
  }

  logout = () => {
    this.props.dispatch(setAuthUser(null));
  };

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar>
            <Link to="/home" activeClassName="active">
              Home
            </Link>
            <Link to="/add" activeClassName="active">
              New Question
            </Link>
            <Link to="/leaderboard" activeClassName="active">
              Leader Board
            </Link>
            {!this.props.authUser && (
              <Link to="/login" activeClassName="active">
                Login
              </Link>
            )}
            {this.props.authUser && (
              <Link to="/" exact onClick={this.logout}>
                ({this.props.authUser.name}) Logout
              </Link>
            )}
          </NavBar>
          <Container>
            {!this.props.loading ? (
              <Switch>
                <Route path="/" exact component={RedirectControl} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/home" component={Home} />
                <ProtectedRoute path="/add" component={QuestionForm} />
                <ProtectedRoute path="/leaderboard" component={Leaderboard} />
                <ProtectedRoute
                  path="/questions/:question_id"
                  component={QuestionDetail}
                />
              </Switch>
            ) : (
              <p>Loading...</p>
            )}
          </Container>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: !state.users.users,
  authUser: state.users.authUser,
});

export default connect(mapStateToProps)(App);
