import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
  const { todoItemsState } = props;
  return (
    <div>
      {todoItemsState.map((value) => {
        return (
          <TodoListItem
            key={value.id}
            textValue={value.title}
            id={value.id}
          />
        )
      })}
    </div>
  )
}

export default TodoList;
