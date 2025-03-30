import React from 'react';
import Tree from '../components/Tree';
import './css/Blog.css';

function Blog() {
  // Simulated blog post data (could be fetched from JSON in the future)
  const posts = [
    {
      title: "Exploring the Alps",
      description: "Experience the breathtaking views and alpine culture of the Swiss Alps. From snow-capped peaks to charming villages, the Alps offer an unforgettable adventure.",
      image: "/images/alps.jpg"
    },
    {
      title: "Beach Paradise in Bali",
      description: "Discover the tranquil beaches of Bali, with golden sands, crystal-clear waters, and vibrant sunsets. A perfect destination for relaxation and rejuvenation.",
      image: "/images/bali.jpg"
    },
    {
      title: "Safari in Serengeti",
      description: "Join us on a safari through Serengeti National Park. Witness the majestic wildlife in their natural habitat and the stunning landscapes of the African savannah.",
      image: "/images/safari.jpg"
    }
    // You can add more objects to this array for more cards
  ];

  return (
    <div className="blog-page">
      <h2>Travel Blog Posts</h2>
      <p>Take a peek at some of our latest travel adventures:</p>
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
