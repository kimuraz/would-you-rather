import React from 'react';

import './Input.scss';


class Select extends React.Component {
  render() {
    return (
      <select className="input" {...this.props}>
        {this.props.children}
      </select>
    );
  }
}

export default Select;
