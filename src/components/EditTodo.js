import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

import '../assets/styles/AddTodo.css';
import Form from './Form';

const AddTodo = (props) => {
  const { editHandler, todoItemsState } = props;
  const { id } = useParams();
  let history = useHistory();

  let value = todoItemsState.filter((val) => {
    return val.id === +id
  });
  
  let initialValue = value[0].title;

  const handleSubmit = (event, inputValue) => {
    event.preventDefault();
    if (inputValue) {
      editHandler(inputValue, id);
      history.push("/");
    }
  }

  return (
    <>
      <Form
        inputType="text"
        submitHandler={handleSubmit}
        placeholderValue="Edit Your Todo"
        buttonTitle="Edit Todo"
        buttonType="submit"
        cardHeader="Edit a Todo"
        initialValue={initialValue}
      />
    </>
  )
}

export default AddTodo;
