import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/NoPage.css';

function NoPage() {
  return (
    <div className="no-page">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <NavLink to="/" className="home-link">Return to Home</NavLink>
    </div>
  );
}

export default NoPage;
