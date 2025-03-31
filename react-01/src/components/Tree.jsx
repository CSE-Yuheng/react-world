// Tree.jsx
import React from 'react';
import './css/Tree.css';

function Tree({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Tree;
