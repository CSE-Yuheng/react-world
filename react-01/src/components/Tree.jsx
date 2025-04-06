import React from 'react';
import './css/Tree.css';

function Tree({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Tree;
