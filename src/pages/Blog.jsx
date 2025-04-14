// src/pages/Blog.jsx
import React from 'react';
import './css/Blog.css';
import essentialToolsImg from '../images/Essential Tools.jpg';
import toolSafetyImg from '../images/Tool Safety.jpg';
import choosingSawImg from '../images/Choosing a Saw.jpg';

const Blog = () => {
  return (
    <main className="container">
      <h2 className="section-heading">ToolHub Blog & DIY Tips</h2>
      <p>Get the most out of your tools with our latest articles and tutorials.</p>

      <div className="blog-post">
        <h2>5 Essential Tools for Every DIY Enthusiast</h2>
        <img src={essentialToolsImg} alt="Essential Tools" />
        <p>
          Whether you’re just starting out or expanding your tool collection, these
          five essentials will help you tackle a wide variety of projects...
        </p>
        <p><a href="#">Read more</a></p>
      </div>

      <div className="blog-post">
        <h2>Power Tool Safety: Best Practices</h2>
        <img src={toolSafetyImg} alt="Tool Safety" />
        <p>
          Safety should always come first when operating power tools. Learn the
          must-follow guidelines for keeping yourself and your workspace safe...
        </p>
        <p><a href="#">Read more</a></p>
      </div>

      <div className="blog-post">
        <h2>How to Choose the Right Saw for Your Project</h2>
        <img src={choosingSawImg} alt="Choosing a Saw" />
        <p>
          Circular saw, jigsaw, or table saw? Here’s how to decide which one fits
          your project’s needs best...
        </p>
        <p><a href="#">Read more</a></p>
      </div>
    </main>
  );
};

export default Blog;

