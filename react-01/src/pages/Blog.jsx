// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import Tree from '../components/Tree';
import './css/Blog.css';



function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from your live API URL
    fetch('https://travel-blog-api-89dj.onrender.com/api/posts')
      .then(response => response.json())
      .then(data => {
         setPosts(data);
         setLoading(false);
      })
      .catch(error => {
         console.error("Error fetching posts:", error);
         setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page">
      <h2>Travel Blog Posts</h2>
      {loading ? (
         <p>Loading posts...</p>
      ) : (
        <div className="cards-container">
          {posts.map((post, index) => (
            <Tree 
              key={post.id || index}
              title={post.title}
              description={post.description}
              image={post.image}  // assumes API returns valid image paths
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Blog;


