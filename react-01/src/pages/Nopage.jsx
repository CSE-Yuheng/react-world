import React from 'react';
import { Link } from 'react-router-dom';
import './css/Nopage.css';

function Nopage() {
  return (
    <div className="nopage">
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you're looking for does not exist.</p>
      <p><Link to="/">Return to Home</Link></p>
    </div>
  );
}

export default Nopage;
