import React, { useState, useEffect } from 'react';
import ToolForm from '../components/ToolForm';
import ToolItem from '../components/ToolItem';

const AddTool = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('https://backend-iy3a.onrender.com/api/tools')
      .then(res => res.json())
      .then(data => setTools(data))
      .catch(err => console.error('Error fetching tools:', err));
  }, []);

  // Add new tool to state list
  const handleAddTool = (newTool) => {
    setTools(prev => [...prev, newTool]);
  };

  // Update an existing tool in state
  const handleUpdateTool = (updated) => {
    setTools(prev =>
      prev.map(t => (t._id === updated._id ? updated : t))
    );
  };

  // Delete a tool by ID
  const handleDeleteTool = (id) => {
    if (!window.confirm('Delete this tool?')) return;
    fetch(`https://backend-iy3a.onrender.com/api/tools/${id}`, { method: 'DELETE' })
      .then(res => {
        if (!res.ok) throw new Error('Delete failed');
        setTools(prev => prev.filter(t => t._id !== id));
      })
      .catch(err => console.error('Error deleting tool:', err));
  };

  return (
    <div className="add-tool-page">
      <ToolForm onAdd={handleAddTool} />

      <h2>Available Tools</h2>
      <ul className="tool-list">
        {tools.map(tool => (
          <ToolItem
            key={tool._id}
            tool={tool}
            onUpdate={handleUpdateTool}
            onDelete={handleDeleteTool}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddTool;
