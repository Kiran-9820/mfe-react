import React from 'react';
import './Header.css';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "Micro Frontend App" }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">{title}</h1>
        <nav className="header-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;