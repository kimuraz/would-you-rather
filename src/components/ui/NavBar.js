import React from 'react';

import './NavBar.scss';

class NavBar extends React.PureComponent {
  render() {
    return <nav className="nav-bar">{this.props.children}</nav>;
  }
}

export default NavBar;
