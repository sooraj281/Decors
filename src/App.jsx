import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Service from './components/Service';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Swiper from './components/Swiper';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/swiper" element={<Swiper/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
