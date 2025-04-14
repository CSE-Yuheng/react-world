import React from 'react';
import './css/ToolCard.css';

function ToolCard({ image, title, description }) {
  return (
    <div className="tool-card">
      <img src={image} alt={title} className="tool-card-img" />
      <div className="tool-card-content">
        <h3 className="tool-card-title">{title}</h3>
        <p className="tool-card-text">{description}</p>
      </div>
    </div>
  );
}

export default ToolCard;
