import { saveQuestion, saveQuestionAnswer } from '../utils/api';

import {ADD_QUESTION, SET_QUESTIONS, COMPUTE_QUESTION} from './types';

export const addQuestion = question => dispatch => {
  return saveQuestion(question).then((res) => {
    return dispatch({type: ADD_QUESTION, question: res });
  });
};

export const computeQuestion = vote => dispatch => {
  return saveQuestionAnswer(vote).then(() => {
    return dispatch({type: COMPUTE_QUESTION, vote});
  });
};

export const setQuestions = questions => ({ type: SET_QUESTIONS, questions });
