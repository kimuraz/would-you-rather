import {
  SET_AUTH_USER,
  RECEIVE_USERS,
  VOTE_QUESTION,
  ADD_QUESTION,
} from '../actions/types';

const initialState = {
  authUser: null,
  users: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {...state, authUser: action.user};
    case RECEIVE_USERS:
      return {...state, users: action.users};
    case ADD_QUESTION:
      return {
        ...state,
        users: {
          ...state.users,
          [state.authUser.id]: {
            ...state.users[state.authUser.id],
            questions: [
              ...state.users[state.authUser.id].questions,
              action.question.id,
            ],
          },
        },
      };
    case VOTE_QUESTION:
      return {
        ...state,
        users: {
          ...state.users,
          [state.authUser.id]: {
            ...state.users[state.authUser.id],
            answers: {
              ...state.users[state.authUser.id].answers,
              [action.vote.id]: action.vote.answer,
            },
          },
        },
        authUser: {
          ...state.authUser,
          answers: {
            ...state.authUser.answers,
            [action.vote.id]: action.vote.answer,
          },
        },
      };
    default:
      return state;
  }
};

export default users;
