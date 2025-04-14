import React, { useState, useEffect } from 'react';
import ToolForm from '../components/ToolForm';

const AddTool = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/api/tools')
      .then((res) => res.json())
      .then((data) => setTools(data))
      .catch((err) => console.error('Error fetching tools:', err));
  }, []);

  const handleAddTool = (newTool) => {
    setTools([...tools, newTool]);
  };

  return (
    <div>
      <ToolForm onAdd={handleAddTool} />
      <h2>Available Tools</h2>
      <ul>
        {tools.map((tool) => (
          <li key={tool._id}>
            <strong>{tool.name}</strong> - ${tool.price} - {tool.brand}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTool;
