import React from 'react';


class Card extends React.Component {
  return (
    <div className="card">
      <header className="card-header">
        <h4>{this.props.title}</h4>
      </header>

      <div className="card-body">
        {this.props.children}
      </div>
    </div>
  );
}

export default Card;
