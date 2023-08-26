import React, { useState } from 'react';
import './Header.css';
import logo from "../../data/images/logo.png"

const Header = ({ totalProducts, displayedProducts, onCategoryClick }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo"><a href='https://dimitargegov.site/' target='_blank' rel="noreferrer"><img src={logo} alt='DDG projects'/></a></div>
      <div className={`menu ${showMenu ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="#" onClick={() => onCategoryClick('Bags')}>Bags</a>
        <a href="#" onClick={() => onCategoryClick('Shoes')}>Shoes</a>
      </div>
      <div className="product-counter">
        {`Showing ${displayedProducts} out of ${totalProducts} products`}
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