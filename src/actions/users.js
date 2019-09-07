import { SET_AUTH_USER, RECEIVE_USERS, VOTE_QUESTION } from './types';

export const setAuthUser = user => ({ type: SET_AUTH_USER, user });

export const voteQuestion = vote => ({ type: VOTE_QUESTION, vote });

export const receiveUsers = users => ({ type: RECEIVE_USERS, users });
