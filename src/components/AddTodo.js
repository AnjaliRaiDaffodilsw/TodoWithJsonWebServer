import React from 'react';
import { useHistory } from "react-router-dom";

import '../assets/styles/AddTodo.css';
import Form from './Form';

const AddTodo = (props) => {
  const { placeholderValue, submitHandler } = props;
  let history = useHistory();

  const handleSubmit = (event, inputValue) => {
    event.preventDefault();
    if (inputValue) {
      submitHandler(inputValue);
      history.push("/");
    }
  }

  return (
    <div>
      <Form
        submitHandler={handleSubmit}
        buttonTitle="Add"
        placeholderValue={placeholderValue}
        inputType="text"
        buttonType="submit"
        cardHeader="Add To do List"
        initialValue=""
      />
    </div >
  )
}

export default AddTodo;
