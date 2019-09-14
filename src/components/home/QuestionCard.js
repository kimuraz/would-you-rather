import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {NavLink as Link} from 'react-router-dom';
import {FaQuestionCircle} from 'react-icons/fa';

import {voteQuestion} from '../../actions/users';
import {computeQuestion} from '../../actions/questions';

import {Button, Card} from '../ui';

import './QuestionCard.scss';

class QuestionCard extends React.PureComponent {
  constructor(props) {
    super(props);

    const {authUser, question} = props;

    this.state = {
      selectedAnswer: authUser ? authUser.answers[question.id] : {},
    };
  }

  changeSelect(selectedAnswer) {
    const {authUser, question} = this.props;
    if (authUser && !authUser.answers[question.id]) {
      this.setState({selectedAnswer});
    }
  }

  vote = () => {
    const {dispatch, authUser, question} = this.props;

    if (!this.state.selectedAnswer) {
      alert('Please, select an answer first!');
      return;
    }

    dispatch(
      computeQuestion({
        authedUser: authUser.id,
        qid: question.id,
        answer: this.state.selectedAnswer,
      }),
    ).then(() => {
      dispatch(
        voteQuestion({id: question.id, answer: this.state.selectedAnswer}),
      );
    });
  };

  render() {
    const {question, authUser} = this.props;
    const {selectedAnswer} = this.state;
    return (
      <Card className="question-card" title="Would you rather...">
        <div className="options">
          <span
            onClick={() => this.changeSelect('optionOne')}
            className={`${selectedAnswer === 'optionOne' ? 'voted' : ''}`}>
            {question.optionOne.text}
          </span>
          <i>
            <FaQuestionCircle size={40} color="#1181C8" />
          </i>
          <span
            onClick={() => this.changeSelect('optionTwo')}
            className={`${selectedAnswer === 'optionTwo' ? 'voted' : ''}`}>
            {question.optionTwo.text}
          </span>
        </div>

        <div className="info">
          <br />
          <Link to={`/questions/${question.id}`} color="primary">
            <Button color="primary">Details</Button>
          </Link>
          {!!(authUser && !authUser.answers[question.id]) && (
            <Button onClick={this.vote} color="secondary">
              Vote
            </Button>
          )}
          <br />
          <p>
            by: {question.author} - on:{' '}
            {moment(question.timestamp).format('LLL')}
          </p>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.users.authUser,
});

export default connect(mapStateToProps)(QuestionCard);
