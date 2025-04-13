import React, { useState, useEffect } from 'react';
import Tree from '../components/Tree';
import './css/Tools.css';

function Tools() {
  const [tools, setTools] = useState([]);

  // For simplicity, we simulate fetching data from the server.
  useEffect(() => {
    // For now, we use static tool data.
    const toolData = [
      {
        id: 1,
        title: "Code Formatter",
        description: "Automatically formats your code to improve readability and consistency.",
        image: "/images/formatter.jpg"
      },
      {
        id: 2,
        title: "API Tester",
        description: "Test your REST APIs quickly with this easy-to-use tool.",
        image: "/images/api_tester.jpg"
      },
      {
        id: 3,
        title: "Version Control Helper",
        description: "Streamline your Git workflow with visual tools and simplified commands.",
        image: "/images/vc_helper.jpg"
      }
    ];
    // Optionally, if you have an API endpoint, you can fetch from it:
    // fetch('https://your-api-url/api/tools')
    //   .then(response => response.json())
    //   .then(data => setTools(data))
    //   .catch(error => console.error("Error fetching tools:", error));
    setTools(toolData);
  }, []);

  return (
    <div className="tools-page">
      <h2>Our Featured Tools</h2>
      <div className="cards-container">
        {tools.map(tool => (
          <Tree 
            key={tool.id}
            title={tool.title}
            description={tool.description}
            image={tool.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Tools;

