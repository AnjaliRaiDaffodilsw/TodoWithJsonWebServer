import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { todoItemsState, deleteHandler } = props;
  console.log(todoItemsState)
  return (
    <div>
      {todoItemsState.map((value) => {
        return (
          <TodoListItem
            key={value.id}
            textValue={value.title}
            id={value.id}
            deleteHandler={deleteHandler}
          />
        )
      })}
    </div>
  )
}

export default TodoList;
