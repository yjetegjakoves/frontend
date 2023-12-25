// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Import the associated CSS file
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Deri n'Shpi</h1>
      <p>Shijo ushqimet me ne!</p>
      <Link to="/produktet">
        <button>Produktet</button>
      </Link>
    </div>
  );
};

export default HeroSection;