import React from 'react';

import './Button.scss';

class Button extends React.Component {
  render() {
    return (
      <button className={`btn btn-${this.props.color}`}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
