import React from 'react';
import './Footer.css'; // Import the associated CSS file
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Contact Us</h2>
          <p>Email: derinshpi@gmail.com</p>
          <p>Phone: (+383) 45-909-921</p>
        </div>

        <div className="footer-section">
          <h2>Follow Us</h2>
          <SocialIcon url="https://instagram.com" />
          <SocialIcon url="https://twitter.com" />
          <SocialIcon url="https://facebook.com" />
        </div>

        <div className="footer-section">
          <h2>Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2023 Deri n'Shpi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;