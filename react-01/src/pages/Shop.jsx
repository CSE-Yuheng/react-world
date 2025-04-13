// src/pages/Shop.jsx
import React, { useState, useEffect } from 'react';
import './css/Shop.css';
import choosingSawImg from '../images/Choosing a Saw.jpg';
import circularSawImg from '../images/Circular Saw.jpg';
import cordlessDrillImg from '../images/Cordless Drill.jpg';
import essentialToolsImg from '../images/Essential Tools.jpg';
import handToolSetImg from '../images/Hand Tool Set.jpg';
import toolSafetyImg from '../images/Tool Safety.jpg';
// If needed, other images…

// Map the JSON image path to the imported image
const imageMap = {
  "images/Choosing a Saw.jpg": choosingSawImg,
  "images/Circular Saw.jpg": circularSawImg,
  "images/Cordless Drill.jpg": cordlessDrillImg,
  "images/Essential Tools.jpg": essentialToolsImg,
  "images/Hand Tool Set.jpg": handToolSetImg,
  "images/Tool Safety.jpg": toolSafetyImg,
  // Add more mappings as needed.
};

const Shop = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('/tools.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setTools(data))
      .catch(error => console.error("Error loading JSON data:", error));
  }, []);

  return (
    <main className="container">
      <section>
        <h2 className="section-heading">Part 6: Dynamic Shop Page</h2>
        <p>
          Welcome to our shop page for ToolHub. We dynamically load our catalog from JSON so that our tool list is always up to date.
        </p>
      </section>

      <section>
        <h3 className="section-heading">Our Tools (Loaded from JSON)</h3>
        <div id="tool-list" className="tool-container">
          {tools.map(tool => (
            <div key={tool._id} className="tool-card">
              <img src={imageMap[tool.img_name]} alt={tool.name} />
              <h4>{tool.name}</h4>
              <p><strong>Brand:</strong> {tool.brand}</p>
              <p><strong>Price:</strong> ${tool.price}</p>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section" style={{ marginTop: '2rem' }}>
        <h3 className="section-heading">FAQ & Tips</h3>
        <article>
          <h4>1. How do I know which tool is right for my project?</h4>
          <p>
            Choosing the right tool depends on your project’s needs. For example, a circular saw is great for straight cuts, while a jigsaw can handle curves.
          </p>
        </article>
        <article>
          <h4>2. What’s the best way to avoid accidents when using power tools?</h4>
          <p>
            Always follow safety guidelines: wear protective gear, maintain a clear workspace, and use tools within their limits.
          </p>
        </article>
        <article>
          <h4>3. Can these tools be used for both DIY and professional projects?</h4>
          <p>
            Yes, many tools are versatile enough to handle both casual repairs and professional tasks.
          </p>
        </article>
        <article>
          <h4>4. Do you offer warranties or returns?</h4>
          <p>
            Warranty and return policies vary by product. Please check the product details or contact us for more information.
          </p>
        </article>
        <article>
          <h4>5. Any tips for tool maintenance?</h4>
          <p>
            Regular cleaning, proper storage, and timely maintenance can extend the life of your tools.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Shop;


