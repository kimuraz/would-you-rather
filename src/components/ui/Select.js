import React from 'react';

import './Input.scss';

const Select = props => (
  <select className="input" {...props}>
    {props.children}
  </select>
);

export default Select;
