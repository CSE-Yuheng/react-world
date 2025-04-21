// src/components/ToolItem.jsx
import React, { useState } from 'react';
import ToolForm from './ToolForm';
import './css/ToolItem.css';

const ToolItem = ({ tool, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedTool) => {
    onUpdate(updatedTool);
    setIsEditing(false);
  };

  return (
    <li className="tool-item">
      {isEditing ? (
        <ToolForm
          tool={tool}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <span className="tool-name">{tool.name}</span>
          <span className="tool-price">${tool.price}</span>
          <span className="tool-brand">{tool.brand}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(tool._id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default ToolItem;
