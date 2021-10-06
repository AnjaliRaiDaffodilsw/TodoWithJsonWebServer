import axios from 'axios';

import {
  fetchTodoRequest,
  fetchTodoSuccess,
  fetchTodoFailure
} from '../redux/actions/actions';

export function fetchData() {
  return dispatch => {
    dispatch(fetchTodoRequest());
    axios.get('http://localhost:3000/posts')
      .then(response => {
        dispatch(fetchTodoSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchTodoFailure(error));
      });
  };
}

export default fetchData;