import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE
} from '../actionTypes/actionTypes';

export const initialState = {
  items: [],
  error: null,
  loading: false,
}

export const todoList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.item
      }
    case FETCH_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default: return state
  }

}