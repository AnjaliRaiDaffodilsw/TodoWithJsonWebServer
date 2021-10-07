import React from 'react';

import TodoList from './TodoList';
import '../App.css';

const Todo = (props) => {
  const { todoItemsState, deleteHandler, editHandler } = props;
  return (
    <div className="App">
      <TodoList
        todoItemsState={todoItemsState}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  )
}

export default Todo;
