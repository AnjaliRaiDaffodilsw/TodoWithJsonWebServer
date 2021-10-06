import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE
} from '../actionTypes/actionTypes';

export const fetchTodoRequest = () => {
  return {
    type: FETCH_TODO_REQUEST,
  }
}

export const fetchTodoSuccess = (item) => {
  return {
    type: FETCH_TODO_SUCCESS,
    payload: {
      item
    }
  }
}

export const fetchTodoFailure = (err) => {
  return {
    type: FETCH_TODO_FAILURE,
    payload: {
      error: err
    }
  }
}