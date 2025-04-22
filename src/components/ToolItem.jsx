import React, { useState } from 'react';
import ToolForm from './ToolForm';

const ToolItem = ({ tool, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);

  const handleSave = (updatedTool) => {
    onUpdate(updatedTool);
    setEditing(false);
  };

  return (
    <li className="tool-item">
      {editing ? (
        <ToolForm
          tool={tool}
          onSave={handleSave}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <div className="tool-details">
          <h3>{tool.name}</h3>
          <img
            src={tool.img_name}
            alt={tool.name}
            style={{ maxWidth: '200px', display: 'block', margin: '0.5rem 0' }}
          />
          <p><strong>Brand:</strong> {tool.brand}</p>
          <p><strong>Price:</strong> ${tool.price}</p>
          <p>{tool.description}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDelete(tool._id)}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default ToolItem;
