// src/pages/Shop.jsx
import React, { useState, useEffect } from 'react';
import './css/Shop.css';

const Shop = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Update with your actual URL for tools.json if needed.
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
      {/* Intro Section */}
      <section>
        <h2 className="section-heading">Part 6: Dynamic Shop Page</h2>
        <p>
          Welcome to our newly improved shop page for Part 6 of this project.
          Below, we dynamically load and display a list of tools from our JSON
          file on GitHub. This approach ensures our catalog is always up to date
          without manually editing the HTML for each item.
        </p>
        <p>
          We’ve also included extra tips and FAQs below to give you more insight
          into how each tool can be used effectively. Scroll down to learn more
          about the best practices and frequently asked questions from our
          community.
        </p>
      </section>

      {/* JSON-Driven Product Grid */}
      <section>
        <h3 className="section-heading">Our Tools (Dynamically Loaded from JSON)</h3>
        <div id="tool-list" className="tool-container">
          {tools.map(tool => (
            <div key={tool.id} className="tool-card">
              <img src={tool.img_name} alt={tool.name} />
              <h4>{tool.name}</h4>
              <p><strong>Brand:</strong> {tool.brand}</p>
              <p><strong>Price:</strong> ${tool.price}</p>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ & Tips Section */}
      <section style={{ marginTop: '2rem' }}>
        <h3 className="section-heading">FAQ & Tips</h3>
        <article>
          <h4>1. How do I know which tool is right for my project?</h4>
          <p>
            Determining the right tool depends on your project’s requirements.
            For instance, a circular saw is ideal for straight cuts, while a jigsaw
            handles curves better.
          </p>
        </article>
        <article>
          <h4>2. What’s the best way to avoid accidents when handling power tools?</h4>
          <p>
            Always follow safety guidelines: wear protective gear, keep your workspace
            organized, and never force a tool beyond its capacity.
          </p>
        </article>
        <article>
          <h4>3. Can I use these tools for both DIY and professional tasks?</h4>
          <p>
            Absolutely—many tools are versatile enough for home repairs and professional use.
          </p>
        </article>
        <article>
          <h4>4. Do you offer any warranty or returns for these tools?</h4>
          <p>
            Warranty and return policies vary by product. Please check the details or contact us.
          </p>
        </article>
        <article>
          <h4>5. Any tips on maintaining power tools for longer life?</h4>
          <p>
            Regular cleaning, proper storage, and timely maintenance can extend the life of your tools.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Shop;

