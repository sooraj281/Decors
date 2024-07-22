import React from 'react';
import './Contact.css';
import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div className="max-h-screen px-5 py-20 flex items-center justify-center">
        <div className="bg-transparent p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-white px-5">Contact us</h2>

          <form>
            <input type="text" placeholder="Name" className="border rounded mb-2 w-full p-2" />
            <input type="email" placeholder="Email" className="border rounded mb-2 w-full p-2" />
            <textarea placeholder="Message" className="border rounded mb-2 w-full p-2" />
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Send
            </button>
          </form>

          <div className="m-8 flex items-center justify-center gap-7 text-3xl text-white">
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
            <a href="https://wa.me/918606438971?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
