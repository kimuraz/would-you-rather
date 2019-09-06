import React from 'react';

import './Container.scss';

class Container extends React.Component {
  render() {
    return <main className="container">{this.props.children}</main>;
  }
}

export default Container;
