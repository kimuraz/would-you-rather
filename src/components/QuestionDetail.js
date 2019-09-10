import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PieChart from 'react-minimal-pie-chart';

import UserCard from './users/UserCard';

import './QuestionDetail.scss';

class QuestionDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      question: null,
    };
  }

  componentDidMount() {
    const {match, questions} = this.props;
    const question = questions[match.params.question_id];

    this.setState({question});
  }

  setLabels = ({data, dataIndex}) => {
    return `${data[dataIndex].title} (${data[dataIndex].value})`;
  };

  render() {
    const {authUser, users} = this.props;
    const {question} = this.state;
    return (
      <div className="question-detail">
        {question && (
          <>
            {authUser.answers[question.id] && (
              <PieChart
                lineWidth={20}
                rounded
                data={[
                  {
                    title: question.optionOne.text,
                    value: question.optionOne.votes.length,
                    color: '#1181C8',
                  },
                  {
                    title: question.optionTwo.text,
                    value: question.optionTwo.votes.length,
                    color: '#84C7F2',
                  },
                ]}
                label={this.setLabels}
                labelStyle={{fontSize: '8px'}}
                radius={40}
                labelPosition={110}
                style={{height: '220px'}}
              />
            )}
            <UserCard user={users[question.author]} title="The Author" />
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.users.authUser,
  users: state.users.users,
  questions: state.questions.questions,
});

export default withRouter(connect(mapStateToProps)(QuestionDetail));
