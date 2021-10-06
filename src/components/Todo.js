import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import fetchData from '../api/fetchData';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';

const Todo = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoList.items);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  return (
    <div>
      <TodoListHeader />
      <TodoList
        todoItemsState={todoItems}
      />
    </div>
  )
}

export default Todo;
