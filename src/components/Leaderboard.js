import React from 'react';
import {connect} from 'react-redux';

import UserCard from './users/UserCard';

import './Leaderboard.scss';

class Leaderboard extends React.Component {
  getScore = user => Object.keys(user.answers).length + user.questions.length;

  render() {
    return (
      <div className="leaderboard">
        {Object.values(this.props.users)
          .sort((user1, user2) => this.getScore(user2) - this.getScore(user1))
          .map((user, idx) => (
            <UserCard key={user.id} user={user} title={`# ${idx + 1}`} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({users: state.users.users});

export default connect(mapStateToProps)(Leaderboard);
