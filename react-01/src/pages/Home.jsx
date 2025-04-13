// src/pages/Home.jsx
import React, { useEffect } from 'react';
import './css/Home.css';
import workshopSceneImg from '../images/Workshop scene.jpg';

const Home = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const handleToggle = () => {
      navLinks.classList.toggle('active');
    };
    menuToggle.addEventListener('click', handleToggle);
    return () => menuToggle.removeEventListener('click', handleToggle);
  }, []);

  return (
    <div>
      <header>
        <nav>
          <div className="logo">ToolHub</div>
          <ul className="nav-links">
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="menu-toggle">&#9776;</div>
        </nav>
      </header>
      <main>
        <section className="hero">
          <img src={workshopSceneImg} alt="Workshop scene" />
          <h1>Welcome to ToolHub</h1>
          <p>
            Your one-stop destination for all DIY and professional tool needs. Explore our collection
            of power tools, hand tools, and accessories designed to help you transform your projects
            into reality.
          </p>
          <a href="/shop" className="btn">Start Shopping</a>
        </section>
        <section className="container">
          <h2 className="section-heading">Why Choose ToolHub?</h2>
          <p>
            We empower creators with reliable tools, competitive pricing, and quality resources.
            Whether you’re a seasoned craftsman or a first-time DIYer, our mission is to make your
            projects a success.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 ToolHub by Yuheng Zhu</p>
      </footer>
    </div>
  );
};

export default Home;

