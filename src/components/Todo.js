import React from 'react';

import TodoList from './TodoList';


const Todo = (props) => {
  const { todoItemsState, deleteHandler, editHandler } = props;
  return (
    <div>
      <TodoList
        todoItemsState={todoItemsState}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  )
}

export default Todo;
