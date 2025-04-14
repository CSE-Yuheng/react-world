import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import AddTool from './pages/AddTool'; // Import the AddTool page
import NoPage from './pages/NoPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add-tool" element={<AddTool />} /> {/* New route */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
