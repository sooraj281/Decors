import React from 'react';
import './Gallery.css';
import post1 from '../Assets/post1.jpg';
import post2 from '../Assets/post2.jpg';
import post3 from '../Assets/post3.jpg';

function Gallery() {
  return (
    
    <div className="gallery">
      
      <h2 className="text-3xl font-bold mb-6 text-center text-white px-5">Our Work</h2>
      <div className="image-grid">
        <img src={post1} alt="Stage design 1" />
        <img src={post2} alt="Stage design 2" />
        <img src={post3} alt="Stage design 3" />
      </div>
      </div>
    
  );
}

export default Gallery;
