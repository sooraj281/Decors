
import React from 'react';
import './Contact.css';
import { FaLinkedin, FaInstagram, FaTwitter,FaFacebook} from "react-icons/fa";



function Contact() {
  return (
    
    <div className="contact ">
      <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-transparent p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-white px-5">Contact us</h2>
                      
    
      <form >
        <input type="text" placeholder="Name" className='border rounded' />
        <input type="email" placeholder="Email" className='border rounded'  />
        <textarea placeholder="Message" className='border rounded' ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                   >Send</button>
          
      </form>
      <div className="m-8 flex items-center justify-center gap-7 text-3xl text text-white">
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
    </div>
    </div>
  );
}

export default Contact;
