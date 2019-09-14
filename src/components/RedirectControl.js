import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class RedirectControl extends React.PureComponent {
  render() {
    return <Redirect to={`${!!this.props.authUser ? '/home' : '/login'}`} />;
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps)(RedirectControl);
