// src/pages/NoPage.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/NoPage.css';

function NoPage() {
  return (
    <div className="no-page">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, we couldn't find that page.</p>
      <NavLink to="/" className="home-link">Return Home</NavLink>
    </div>
  );
}

export default NoPage;
