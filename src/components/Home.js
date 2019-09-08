import React from 'react';
import {connect} from 'react-redux';

import QuestionList from './home/QuestionList';

class Home extends React.Component {
  constructor() {
    super();

    this.tabs = ['All', 'Not voted', 'Voted'];
    this.state = {
      selectedTab: 'All',
    };
  }

  handleChange = evt => {
    this.setState({selectedTab: evt.target.value});
  };

  getQuestions = () => {
    const {questions} = this.props;
    const qArr = Object.values(questions);

    const filterFunc = {
      'All': () => true,
      'Not voted': q => !Object.keys(this.props.authUser.answers).includes(q.id),
      'Voted': q => Object.keys(this.props.authUser.answers).includes(q.id)
    };

    return qArr.filter(filterFunc[this.state.selectedTab]);
  }

  render() {
    return (
      <div className="home">
        <div className="filters">
          {this.tabs.map(t => (
            <React.Fragment key={t}>
              <input
                type="radio"
                checked={t === this.state.selectedTab}
                onChange={this.handleChange}
                value={t}
              />
              {t}
            </React.Fragment>
          ))}
        </div>
        <QuestionList questions={this.getQuestions()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.users.authUser,
  questions: state.questions.questions,
});

export default connect(mapStateToProps)(Home);
