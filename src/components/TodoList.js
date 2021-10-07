import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { todoItemsState, deleteHandler, editHandler } = props;
  return (
    <div>
      {todoItemsState.map((value) => {
        return (
          <TodoListItem
            key={value.id}
            textValue={value.title}
            id={value.id}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        )
      })}
    </div>
  )
}

export default TodoList;
