import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import updateData from '../api/updateData';
import fetchData from '../api/fetchData';
import addData from '../api/addData';
import deleteData from '../api/deleteData';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';


const Todo = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoList.items);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  const handleSubmit = (value) => {
    dispatch(addData({ title: value }));
    dispatch(fetchData());
  }

  const handleDelete = (id) => {
    dispatch(deleteData(id));
    dispatch(fetchData());
  }

  const handleEdit = (value, id) => {
    dispatch(updateData({ title: value }, id));
    dispatch(fetchData());
  }
  return (
    <div>
      <TodoListHeader />
      <AddTodo
        submitHandler={handleSubmit}
        placeholderValue="Add To do"
      />
      <TodoList
        todoItemsState={todoItems}
        deleteHandler={handleDelete}
        editHandler={handleEdit}
      />
    </div>
  )
}

export default Todo;
