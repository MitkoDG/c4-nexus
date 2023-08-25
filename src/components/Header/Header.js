import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`menu ${showMenu ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/bags">Bags</a>
        <a href="/shoes">Shoes</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Header;