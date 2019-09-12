import React from 'react';
import {connect} from 'react-redux';
import {FaQuestionCircle} from 'react-icons/fa';
import {NavLink as Link} from 'react-router-dom';

import {Card, Input, Button} from './ui';

import {addQuestion} from '../actions/questions';

import './QuestionForm.scss';

class QuestionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      optionOneText: '',
      optionTwoText: '',
    };
  }

  handleChange = evt => this.setState({[evt.target.name]: evt.target.value});

  addAndClean = evt => {
    evt.preventDefault();
    const {dispatch, authUser} = this.props;
    const {optionOneText, optionTwoText} = this.state;
    if (optionOneText && optionTwoText) {
      dispatch(
        addQuestion({optionOneText, optionTwoText, author: authUser.id}),
      ).then(() => {
        this.setState({ optionOneText: '', optionTwoText: '' });
      });
    }
  }

  render() {
    return (
      <div className="question-form-container">
      {!!this.props.authUser ? <Card title="Would you rather...">
          <form onSubmit={this.addAndClean}>
            <div className="question-layout">
              <div className="input-holder">
                <Input
                  onChange={this.handleChange}
                  name="optionOneText"
                  value={this.state.optionOneText}
                />
                <br />
                OR
                <br />
                <Input
                  onChange={this.handleChange}
                  name="optionTwoText"
                  value={this.state.optionTwoText}
                />
                <br />
              </div>
              <i>
                <FaQuestionCircle size={40} color="#1181C8" />
              </i>
            </div>
            <br />
            <Button type="submit" color="secondary">
              Save
            </Button>
          </form>
        </Card> : <Link to="/login">Please, login to create a question.</Link>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.users.authUser,
});

export default connect(mapStateToProps)(QuestionForm);
