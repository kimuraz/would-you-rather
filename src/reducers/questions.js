import {ADD_QUESTION, COMPUTE_QUESTION, SET_QUESTIONS} from '../actions/types';

const questions = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        questions: {
          ...state.questions,
          [action.question.id]: {...action.question},
        },
      };
    case COMPUTE_QUESTION:
      const {vote} = action;
      return {
        ...state,
        [vote.qid]: {
          ...state.questions[vote.qid],
          [vote.answer]: {
            votes: [
              ...state.questions[vote.qid][vote.answer].votes,
              vote.authedUser,
            ],
            text: state.questions[vote.qid][vote.answer].text,
          },
        },
      };
    case SET_QUESTIONS:
      return {...state, questions: action.questions};
    default:
      return state;
  }
};

export default questions;
