import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <nav
      className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-warning">
      <div className="container">
        Todo App
      </div>
      <Link to="/add" className="btn btn-light ml-auto add-list">
        Create Todo
      </Link>
    </nav>
  )
}

export default Navbar;