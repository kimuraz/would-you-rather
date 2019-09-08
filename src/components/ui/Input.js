import React from 'react';

import './Input.scss';

class Input extends React.Component {
  render() {
    return <input className="input" {...this.props} />;
  }
}

export default Input;
