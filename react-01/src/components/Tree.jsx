import React from 'react';
import './css/Tree.css';

function Tree({ title = "Travel Tip", text = "This is a sample travel tip or blog preview." }) {
  return (
    <div className="tree-card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Tree;
