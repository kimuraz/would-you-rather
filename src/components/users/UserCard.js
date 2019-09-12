import React from 'react';

import {Card} from '../ui';

import './UserCard.scss';

class UserCard extends React.Component {
  getScore = () => {
    const {user} = this.props;
    return Object.keys(user.answers).length + user.questions.length;
  };
  render() {
    const {user, title} = this.props;
    return (
      <Card title={title}>
        <div className="user-card">
          <img src={user.avatarURL} alt={user.name} />
          <div className="user-info">
            <p>Name: {user.name}</p>
            <p>Score: {this.getScore()}</p>
            <p>Answers: {Object.keys(user.answers).length || 0} / Questions: {user.questions.length}</p>
          </div>
        </div>
      </Card>
    );
  }
}

export default UserCard;
