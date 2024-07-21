import React from 'react';
import './Service.css';

function Service() {
  return (
    
    <div className="services max-h-screen flex-items-center justify-center">
      <div className="bg-transparent  text-white  p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc list-inside">
          <li>Concert Stage Design</li>
          <li>Theater Set Design</li>
          <li>Corporate Event Staging</li>
          <li>Wedding Decor</li>
        </ul>
      </div>
    </div>
  );
}

export default Service;
