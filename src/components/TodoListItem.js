import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/styles/TodoListItem.css';

const TodoListItem = (props) => {
  const { textValue, deleteHandler, id } = props;
  return (
    <div className="list">
      <p>
        {textValue}
      </p>
      <span>
        <FontAwesomeIcon
          className="faicons"
          icon="trash"
          onClick={() => deleteHandler(id)}
        />
      </span>
    </div>
  )
}

export default TodoListItem;
