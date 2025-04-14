import React, { useState } from 'react';
import Joi from 'joi';

const ToolForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    brand: '',
    description: '',
    img_name: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

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

    const errorObj = {};
    for (let item of error.details) {
      errorObj[item.path[0]] = item.message;
    }
    return errorObj;
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
      const response = await fetch('/api/tools', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const { error } = await response.json();
        setErrors({ submit: error });
        return;
      }

      const { tool } = await response.json();
      onAdd(tool);
      setFormData({
        name: '',
        price: '',
        brand: '',
        description: '',
        img_name: ''
      });
      setErrors({});
      setSuccess(true);
    } catch (err) {
      setErrors({ submit: 'An unexpected error occurred.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tool-form">
      <h2>Add a New Tool</h2>
      {success && <p className="success">Tool added successfully!</p>}
      {errors.submit && <p className="error">{errors.submit}</p>}
      <div>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
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
        <input
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
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
        <input
          name="img_name"
          value={formData.img_name}
          onChange={handleChange}
        />
        {errors.img_name && <p className="error">{errors.img_name}</p>}
      </div>
      <button type="submit">Add Tool</button>
    </form>
  );
};

export default ToolForm;

