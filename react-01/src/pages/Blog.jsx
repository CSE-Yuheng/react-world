// Blog.jsx (corrected and reliable)
import React from 'react';
import Tree from '../components/Tree';
import './css/Blog.css';

// Import images explicitly from src/images
import alps from '../images/alps.jpg';
import bali from '../images/bali.jpg';
import safari from '../images/safari.jpg';

function Blog() {
  const posts = [
    {
      title: "Exploring the Alps",
      description: "Experience the Alps...",
      image: alps // <-- use imported image
    },
    {
      title: "Beach Paradise in Bali",
      description: "Discover Bali beaches...",
      image: bali // <-- use imported image
    },
    {
      title: "Safari in Serengeti",
      description: "Safari through Serengeti...",
      image: safari // <-- use imported image
    }
  ];

  return (
    <div className="blog-page">
      <h2>Travel Blog Posts</h2>
      <div className="cards-container">
        {posts.map((post, index) => (
          <Tree 
            key={index}
            title={post.title}
            description={post.description}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
