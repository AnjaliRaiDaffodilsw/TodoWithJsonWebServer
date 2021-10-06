import axios from 'axios';

import {
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError
} from '../redux/actions/actions';

export function deleteData(id) {
  return dispatch => {
    dispatch(deleteTodoRequest());
    axios.delete(`http://localhost:3000/posts/${id}`)
      .then(() => {
        dispatch(deleteTodoSuccess());
      }).catch((error) => {
        dispatch(deleteTodoError(error));
      })
  }
}

export default deleteData;