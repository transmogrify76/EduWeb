import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">EDU WEb</div>
      <div className="navbar-right">
        <a href="#">Contact Us</a>
        <a href="#">About Us</a>
        <div className="dropdown">
          <div onClick={toggleDropdown} className="dropbtn">Log In</div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/Login">Student</Link>
              <Link to="/Plogin">Parent</Link>
              <Link to="/tlogin">Teacher</Link>
              <Link to="/Alogin">Admin</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
