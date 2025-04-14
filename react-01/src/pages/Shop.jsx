// src/pages/Shop.jsx
import React from 'react';
import './css/Shop.css';
import toolsData from '../data/tools.json'; // Import JSON directly
import choosingSawImg from '../images/Choosing a Saw.jpg';
import circularSawImg from '../images/Circular Saw.jpg';
import cordlessDrillImg from '../images/Cordless Drill.jpg';
import essentialToolsImg from '../images/Essential Tools.jpg';
import handToolSetImg from '../images/Hand Tool Set.jpg';
import toolSafetyImg from '../images/Tool Safety.jpg';
import workshopSceneImg from '../images/Workshop scene.jpg'; // Add missing import

const imageMap = {
  "images/Choosing a Saw.jpg": choosingSawImg,
  "images/Circular Saw.jpg": circularSawImg,
  "images/Cordless Drill.jpg": cordlessDrillImg,
  "images/Essential Tools.jpg": essentialToolsImg,
  "images/Hand Tool Set.jpg": handToolSetImg,
  "images/Tool Safety.jpg": toolSafetyImg,
  "images/Workshop scene.jpg": workshopSceneImg, // Added missing mapping
};

const Shop = () => {
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
          {toolsData.map(tool => (
            <div key={tool._id} className="tool-card">
              <img
                src={imageMap[tool.img_name]}
                alt={tool.name}
                onError={(e) => {
                  e.target.src = 'fallback-image-path'; // Optional: Add fallback
                }}
              />
              <h4>{tool.name}</h4>
              <p><strong>Brand:</strong> {tool.brand}</p>
              <p><strong>Price:</strong> ${tool.price}</p>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Keep the FAQ section as-is */}
    </main>
  );
};

export default Shop;

