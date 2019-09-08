import {getInitialData} from '../utils/api';
import {setQuestions} from './questions';
import {receiveUsers} from './users';

export const loadInitialData = () => {
  return dispatch => {
    return getInitialData().then(({users, questions}) => {
      dispatch(setQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
};
