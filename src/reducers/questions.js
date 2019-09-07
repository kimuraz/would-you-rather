import {ADD_QUESTION, COMPUTE_QUESTION, SET_QUESTIONS} from '../actions/types';

const questions = (state = {}, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      return {...state, [action.question.id]: {...action.question}};
    case COMPUTE_QUESTION:
      const {vote} = action;
      return {
        ...state,
        [vote.question]: {
          ...state[vote.question],
          [vote.option]: {
            votes: [...state[vote.question][vote.option].votes, vote.user],
            text: state[vote.question][vote.option].text,
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
