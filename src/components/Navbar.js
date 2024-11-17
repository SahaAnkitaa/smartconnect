import React from 'react';
import './Navbar.css'; // Optional styling
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SmartConnect</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>  {/* Link to Home (Main page) */}
        <li><Link to="/control">Control</Link></li> {/* Link to Control page */}
        <li><Link to="/diagnostics">Diagnostics</Link></li>
        <li><a href="#help"><i className="fas fa-question-circle"></i> Help</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

