import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import '../assets/styles/AddTodo.css';

const AddTodo = (props) => {
  const { placeholderValue, submitHandler } = props;
  const [inputValue, setInputValue] = useState('');
  let history = useHistory();
  useEffect(() => {
    if(inputValue) {
      submitHandler(inputValue);
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
          placeholder={placeholderValue}
          className="input-field"
        />
        <button type="submit">+</button>
      </form>
    </div >
  )
}

export default AddTodo;
