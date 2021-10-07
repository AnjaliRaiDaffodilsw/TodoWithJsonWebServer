import axios from 'axios';

import {
  updateTodoDataRequest,
  updateTodoDataSuccess,
  updateTodoDataFailure
} from '../redux/actions/actions';

export function updateData(dataObj, id) {
  return dispatch => {
    dispatch(updateTodoDataRequest());
    axios.patch(`http://localhost:3000/posts/${id}`, dataObj)
      .then(() => {
        dispatch(updateTodoDataSuccess());
      })
      .catch(error => {
        dispatch(updateTodoDataFailure(error));
      });
  };
}

export default updateData;