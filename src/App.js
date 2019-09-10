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
import QuestionForm from './components/QuestionForm';
import QuestionDetail from './components/QuestionDetail';
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
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavBar>
            {this.props.authUser && (
              <>
                <Link to="/home" activeClassName="active">Home</Link>
                <Link to="/add" activeClassName="active">New Question</Link>
                <Link to="/leaderboard" activeClassName="active">Leader Board</Link>
                <Link to="/" exact onClick={this.logout}>Logout</Link>
              </>
            )}
          </NavBar>
          <Container>
            {!this.props.loading ? (
              <>
                <Route exact path="/" component={RedirectControl} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/add" component={QuestionForm} />
                <Route path="/questions/:question_id" component={QuestionDetail} />
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
