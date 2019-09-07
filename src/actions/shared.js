import { getInitialData } from '../utils/api';
import { setQuestions } from './question'; 
import { receiveUsers } from './users';


const loadInitialData = () => {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(setQuestions(questions));
      dispatch(receiveUsers(users)); 
    });
  };
}
