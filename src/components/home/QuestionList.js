import React from 'react';
import QuestionCard from './QuestionCard';

import './QuestionList.scss';

class QuestionList extends React.PureComponent {
  render() {
    const {questions} = this.props;
    return (
      <ul className="question-list">
        {[...questions].sort((q1, q2) => q2.timestamp - q1.timestamp).map(q => (
          <li key={q.id}>
            <QuestionCard question={q} />
          </li>
        ))}
      </ul>
    );
  }
}

export default QuestionList;
