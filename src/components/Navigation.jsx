import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="nav">
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        &#9776;
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
        <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
        <li><NavLink to="/shop" onClick={() => setMenuOpen(false)}>Shop</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        <li><NavLink to="/add-tool" onClick={() => setMenuOpen(false)}>Add Tool</NavLink></li> {/* New link */}
      </ul>
    </nav>
  );
}

export default Navigation;

