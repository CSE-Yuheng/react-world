import React, { useEffect } from 'react';
import './css/Home.css';

const Home = () => {
  // Implement mobile navigation toggle using useEffect.
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
            <li><a href="index.html" className="active">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <div className="menu-toggle">&#9776;</div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <img src="images/Workshop scene.jpg" alt="Workshop scene" />
          <h1>Welcome to ToolHub</h1>
          <p>
            Your one-stop destination for all DIY and professional tool needs. Explore
            our collection of power tools, hand tools, and accessories designed to help you
            transform your projects into reality.
          </p>
          <a href="shop.html" className="btn">Start Shopping</a>
        </section>

        {/* Additional Content */}
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
