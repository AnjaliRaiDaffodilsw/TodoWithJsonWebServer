import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  FETCH_ADDTODO_REQUEST,
  FETCH_ADDTODO_SUCCESS,
  FETCH_ADDTODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE

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
    case FETCH_ADDTODO_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_ADDTODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      }
    case FETCH_ADDTODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case DELETE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      }
    }
    case DELETE_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    case UPDATE_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }
    case UPDATE_TODO_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
      }
    }
    case UPDATE_TODO_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    }
    default: return state;
  }
}