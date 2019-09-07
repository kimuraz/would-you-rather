import {SET_AUTH_USER, RECEIVE_USERS, VOTE_QUESTION} from '../actions/types';

const initialState = {
  authUser: null,
  users: [],
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return { ...state, authUser: action.user };
    case RECEIVE_USERS:
      return { ...state, users: action.users });

};
