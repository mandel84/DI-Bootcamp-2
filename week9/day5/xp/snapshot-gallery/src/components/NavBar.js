import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <h1>SnapShot</h1>
      <ul>
        <li><NavLink to="/mountain">Mountain</NavLink></li>
        <li><NavLink to="/beaches">Beaches</NavLink></li>
        <li><NavLink to="/birds">Birds</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;
