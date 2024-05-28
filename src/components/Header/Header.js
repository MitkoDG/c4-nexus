import React, { useState } from 'react';
import './Header.css';
import logo from "../../data/images/logo.png"

const Header = ({ totalProducts, displayedProducts, onCategoryClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href='https://dimitargegov.website/' target='_blank' rel="noreferrer">
          <img src={logo} alt='DDG projects' />
        </a>
      </div>
      {/* <div className="product-counter">
        {`Showing ${displayedProducts} out of ${totalProducts} products`}
      </div> */}
      <div className={`modal-overlay ${showMenu ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`hamburger ${showMenu ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${showMenu ? 'active' : ''}`}>
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="#" onClick={() => { onCategoryClick('Bags'); closeMenu(); }}>Bags</a>
        <a href="#" onClick={() => { onCategoryClick('Shoes'); closeMenu(); }}>Shoes</a>
      </div>
    </nav>
  );
};

export default Header;