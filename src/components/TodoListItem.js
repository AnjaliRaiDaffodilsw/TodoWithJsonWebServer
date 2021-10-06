import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../assets/styles/TodoListItem.css';

const TodoListItem = (props) => {
  const { textValue, deleteHandler, id, editHandler } = props;
  const [value, setValue] = useState(textValue);
  const [onSave, setOnSave] = useState(false);

  useEffect(() => {
    if (!onSave) {
      editHandler(value, id);
    }
  }, [onSave])

  const saveHandler = () => {
    setOnSave(!onSave)
  }

  return (
    <div className="list">
      {
        onSave ?
          <button className="editable-button">
            <input
              id={id}
              type="text"
              value={value}
              onChange={(event) => {
                setValue(event.target.value)
              }}
              autoComplete="off"
              className="input-field"
            />
          </button>
          : <button
            className="editable-button"
            onClick={() => setOnSave(!onSave)}
          >
            <p className="non-editable-input">{textValue}</p>
          </button>
      }
      <div className="buttons-container">
        {
          onSave
          &&
          <button
            onClick={() => saveHandler()}
            className="save-button">
            Save
              </button>
        }
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
