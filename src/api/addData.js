import axios from 'axios';

import {
  fetchAddTodoRequest,
  fetchAddTodoSuccess,
  fetchAddTodoFailure,
} from '../redux/actions/actions';

export function addData(dataObj) {
  return dispatch => {
    dispatch(fetchAddTodoRequest());
    axios.post('http://localhost:3000/posts/', dataObj)
      .then(() => {
        dispatch(fetchAddTodoSuccess());
      })
      .catch(error => {
        dispatch(fetchAddTodoFailure(error));
      });
  };
}

export default addData;