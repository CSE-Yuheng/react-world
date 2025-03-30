import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import NoPage from './pages/NoPage';
import './index.css';  /* Global styles */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define a layout route that wraps the main structure */}
        <Route path="/" element={<Layout />}>
          {/* Index route for the home page */}
          <Route index element={<Home />} />
          {/* About page route */}
          <Route path="about" element={<About />} />
          {/* Blog page route */}
          <Route path="blog" element={<Blog />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
