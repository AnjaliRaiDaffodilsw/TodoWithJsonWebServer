import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import './importFile';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import fetchData from './api/fetchData';
import AddTodo from './components/AddTodo';
import addData from './api/addData';
import updateData from './api/updateData';
import EditTodo from './components/EditTodo';
import deleteData from './api/deleteData';

const App = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todoList.items);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch])

  const handleSubmit = (value) => {
    dispatch(addData({ title: value }));
    dispatch(fetchData());
  }

  const handleEdit = (value, id) => {
    dispatch(updateData({ title: value }, id));
    dispatch(fetchData());
  }

  const handleDelete = (id) => {
    dispatch(deleteData(id));
    dispatch(fetchData());
  }

  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="container">
          <div className="py-3 form-container">
            <Switch>
              <Route exact path="/">
                <Todo
                  todoItemsState={todoItems}
                  deleteHandler={handleDelete}
                  editHandler={handleEdit}
                />
              </Route>
              <Route exact path="/add" >
                <AddTodo
                  submitHandler={handleSubmit}
                  placeholderValue="Add To do"
                />
              </Route>
              <Route exact path="/edit/:id">
                <EditTodo
                  editHandler={handleEdit}
                  todoItemsState={todoItems}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
