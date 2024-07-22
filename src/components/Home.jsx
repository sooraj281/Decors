import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import stage2 from '../Assets/stage2.mp4';
import stage3 from '../Assets/stage3.mp4';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title text-white text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Stage
        <span className="highlight-text"> Decors</span>
      </h1>
      <p className="home-description">
        Crafting timeless moments with a touch of elegance. Let's turn your vision into unforgettable reality.
      </p>
      <div className="home-buttons">
        <Link to="/swiper" className="documentation-button">
          View Designs
        </Link>
      </div>
      <div className="home-videos">
        <video autoPlay loop muted className="video">
          <source src={stage2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay loop muted className="video">
          <source src={stage3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="m-8 flex items-center justify-center gap-10 text-4xl text-white py-10">
        <a href="https://www.linkedin.com/in/sooraj-k-b34633230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default Home;
