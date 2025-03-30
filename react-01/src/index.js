import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Nopage from './pages/Nopage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Layout wrapper route */}
      <Route path="/" element={<Layout />}>
        {/* index = default page for base path */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        {/* catch-all for undefined routes */}
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
