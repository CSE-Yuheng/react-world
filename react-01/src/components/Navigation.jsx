import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <NavLink to="/" end className="nav-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" className="nav-item">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
