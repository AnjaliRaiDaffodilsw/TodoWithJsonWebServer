import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

import '../assets/styles/AddTodo.css';

const AddTodo = (props) => {
  const { editHandler } = props;
  const { id } = useParams();
  const [inputValue, setInputValue] = useState('');
  let history = useHistory();
  
  useEffect(() => {
    if (inputValue) {
      editHandler(inputValue, id);
      history.push("/");
    }
  }, [inputValue]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let input = event.target.userInput.value;
    if (input) {
      setInputValue(input)
    }
  }

  return (
    <div>
      <form
        className="to-do-form"
        onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="userInput"
          autoComplete="off"
          placeholder="EditTodo"
          className="input-field"
        />
        <button type="submit">+</button>
      </form>
    </div >
  )
}

export default AddTodo;
