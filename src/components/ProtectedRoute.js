import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect, Route} from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render() {
    const {component, location, path, authUser} = this.props;
    return !authUser ? (
      <Redirect
        to={{
          pathname: '/login',
          search: `?redirect=${JSON.stringify(location.pathname)}`,
          state: {referrer: location.pathname},
        }}
      />
    ) : (
      <Route path={path} component={component} />
    );
  }
}

const mapStateToProps = state => ({authUser: state.users.authUser});

export default withRouter(connect(mapStateToProps)(ProtectedRoute));
