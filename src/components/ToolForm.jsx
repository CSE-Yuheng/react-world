// src/components/ToolForm.jsx
import React, { useState, useEffect } from 'react';
import Joi from 'joi';

const ToolForm = ({ tool, onAdd, onSave, onCancel }) => {
  // If editing, preload formData from `tool`; otherwise start blank
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    brand: '',
    description: '',
    img_name: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // On mount or when `tool` changes, populate formData
  useEffect(() => {
    if (tool) {
      setFormData({
        name: tool.name,
        price: tool.price,
        brand: tool.brand,
        description: tool.description,
        img_name: tool.img_name
      });
      setErrors({});
      setSuccess(false);
    }
  }, [tool]);

  const schema = Joi.object({
    name: Joi.string().min(3).required().label('Name'),
    price: Joi.number().min(0).required().label('Price'),
    brand: Joi.string().min(2).required().label('Brand'),
    description: Joi.string().min(5).required().label('Description'),
    img_name: Joi.string().required().label('Image Name')
  });

  const validate = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (!error) return null;
    const errObj = {};
    for (let item of error.details) {
      errObj[item.path[0]] = item.message;
    }
    return errObj;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorObj = validate();
    if (errorObj) {
      setErrors(errorObj);
      return;
    }

    try {
      const url = tool
        ? `/api/tools/${tool._id}`
        : '/api/tools';
      const method = tool ? 'PUT' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await res.json();
      if (!res.ok) {
        setErrors({ submit: result.error || 'Server error' });
        return;
      }

      if (tool) {
        // editing
        onSave(result.tool);
      } else {
        // adding
        onAdd(result.tool);
        setFormData({ name:'',price:'',brand:'',description:'',img_name:'' });
      }
      setErrors({});
      setSuccess(true);
    } catch (err) {
      setErrors({ submit: 'Unexpected error' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tool-form">
      <h2>{tool ? 'Edit Tool' : 'Add a New Tool'}</h2>
      {success && <p className="success">{tool ? 'Tool updated!' : 'Tool added!'}</p>}
      {errors.submit && <p className="error">{errors.submit}</p>}
      <div>
        <label>Name:</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <label>Price:</label>
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <p className="error">{errors.price}</p>}
      </div>
      <div>
        <label>Brand:</label>
        <input name="brand" value={formData.brand} onChange={handleChange} />
        {errors.brand && <p className="error">{errors.brand}</p>}
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>
      <div>
        <label>Image Name:</label>
        <input name="img_name" value={formData.img_name} onChange={handleChange} />
        {errors.img_name && <p className="error">{errors.img_name}</p>}
      </div>
      <button type="submit">{tool ? 'Save Changes' : 'Add Tool'}</button>
      {tool && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default ToolForm;


