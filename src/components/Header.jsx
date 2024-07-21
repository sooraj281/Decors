
// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Signin</Link></li>
          <li><Link to="/swiper">Swiper</Link></li>
       
        </ul>
      </nav>
    </header>
  );
}

export default Header;


// ... (rest of the Header.js code remains the same)
