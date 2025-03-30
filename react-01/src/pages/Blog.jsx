import React from 'react';
import Tree from '../components/Tree';
import './css/Blog.css';

function Blog() {
  return (
    <div className="blog">
      <h2>Blog</h2>
      <div className="blog-list">
        <Tree 
          title="Pack Light, Travel Far" 
          text="Carrying less luggage makes travel easier and more enjoyable." 
        />
        <Tree 
          title="Embrace Local Culture" 
          text="Immersing yourself in local customs enriches your travel experience." 
        />
        <Tree 
          title="Plan, But Stay Flexible" 
          text="It's good to have a plan, but leave room for spontaneous adventures." 
        />
      </div>
    </div>
  );
}

export default Blog;
