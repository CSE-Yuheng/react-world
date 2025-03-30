import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
