import React from 'react';

import './Card.scss';

class Card extends React.Component {
  render() {
    return (
      <div className={`card ${this.props.className}`}>
        <header className="card-header">
          <h3>{this.props.title}</h3>
        </header>

        <div className="card-body">{this.props.children}</div>
      </div>
    );
  }
}

export default Card;
