import React from 'react';
import logo from './stackline_logo.svg'; // Ensure the path to the logo file is correct

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Stackline Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;
