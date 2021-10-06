import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  FETCH_ADDTODO_REQUEST,
  FETCH_ADDTODO_SUCCESS,
  FETCH_ADDTODO_FAILURE,
} from '../actionTypes/actionTypes';

export const fetchTodoRequest = () => {
  return {
    type: FETCH_TODO_REQUEST,
    payload: {
      isLoading: true
    }
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

export const fetchAddTodoRequest = () => {
  return {
    type: FETCH_ADDTODO_REQUEST,
    payload: {
      isLoading: true
    }
  }
}

export const fetchAddTodoSuccess = () => {
  return {
    type: FETCH_ADDTODO_SUCCESS,
    payload: {
      isLoading: false,
    }
  }
}

export const fetchAddTodoFailure = (error) => {
  return {
    type: FETCH_ADDTODO_FAILURE,
    payload: {
      error,
    }
  }
}