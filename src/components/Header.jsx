

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/swiper">Designs</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Signin</Link></li>
       
       
        </ul>
      </nav>
    </header>
  );
}

export default Header;


