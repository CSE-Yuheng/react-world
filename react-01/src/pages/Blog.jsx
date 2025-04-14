// src/pages/Blog.jsx
import React, { useState, useEffect } from 'react';
import Tree from '../components/Tree';
import './css/Blog.css';

// Import images explicitly from src/images folder
import alps from '../images/alps.jpg';
import bali from '../images/bali.jpg';
import safari from '../images/safari.jpg';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://travel-blog-api-89dj.onrender.com/api/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        // Fallback to static posts if fetch fails
        setPosts([
          {
            title: "Exploring the Alps",
            description: "Experience the breathtaking views and alpine culture of the Swiss Alps. From snow-capped peaks to charming villages, the Alps offer an unforgettable adventure.",
            image: alps  // imported image from src/images
          },
          {
            title: "Beach Paradise in Bali",
            description: "Discover the tranquil beaches of Bali, with golden sands, crystal-clear waters, and vibrant sunsets. A perfect destination for relaxation and rejuvenation.",
            image: bali  // imported image from src/images
          },
          {
            title: "Safari in Serengeti",
            description: "Join us on a safari through Serengeti National Park. Witness majestic wildlife in their natural habitat and the stunning landscapes of the African savannah.",
            image: safari  // imported image from src/images
          }
        ]);
      });
  }, []);

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
