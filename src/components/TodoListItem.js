import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

import '../assets/styles/TodoListItem.css';

const TodoListItem = (props) => {
  const { textValue, deleteHandler, id } = props;

  return (
    <div className="list">
      <p className="non-editable-input">{textValue}</p>
      <div className="buttons-container">

        <Link to={`/edit/${id}`}>
          <span className="material-icons mr-2">
            <button className="btn bg-warning ml-auto edit-button">edit</button>
          </span>
        </Link>
        <span>
          <FontAwesomeIcon
            className="faicons"
            icon="trash"
            onClick={() => deleteHandler(id)}
          />
        </span>
      </div>
    </div>
  )
}

export default TodoListItem;
