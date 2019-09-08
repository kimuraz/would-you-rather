import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
} from 'react-router-dom';
import {connect} from 'react-redux';

import RedirectControl from './components/RedirectControl';
import Login from './components/Login';
import Home from './components/Home';
import {Container, NavBar} from './components/ui';

import {loadInitialData} from './actions/shared';

import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.loading && this.props.dispatch(loadInitialData());
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar>
            {this.props.authUser && (
              <>
                <Link to="/home" activeClassName="active">Home</Link>
                <Link to="/newQuestion" activeClassName="active">New Question</Link>
                <Link to="/leaderBoard" activeClassName="active">Leader Board</Link>
              </>
            )}
          </NavBar>
          <Container>
            {!this.props.loading ? (
              <>
                <Route path="/" component={RedirectControl} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
              </>
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
