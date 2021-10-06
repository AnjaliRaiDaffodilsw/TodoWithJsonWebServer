import React from 'react'

import '../assets/styles/TodoListItem.css';

const TodoListItem = (props) => {
  const { textValue } = props;
  return (
    <div className="list">
      <p>{textValue}</p>
    </div>
  )
}

export default TodoListItem;
