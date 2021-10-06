import React from 'react'

const TodoListItem = (props) => {
  const { textValue } = props;
  return (
    <div>
      <p>{textValue}</p>
    </div>
  )
}

export default TodoListItem;
