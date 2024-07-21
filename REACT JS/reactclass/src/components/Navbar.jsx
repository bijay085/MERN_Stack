import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/main">Main Page</Link></li>
        <li><Link to="/carousel">Carousel</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
