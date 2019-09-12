import {
  SET_AUTH_USER,
  RECEIVE_USERS,
  UPDATE_USER,
  VOTE_QUESTION,
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
    case UPDATE_USER:
      return {
        ...state,
        users: {...state.users, [action.user.id]: {...action.user}},
      };
    case VOTE_QUESTION:
      return {
        ...state,
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
