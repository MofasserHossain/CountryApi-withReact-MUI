import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div className="header-area pt-4">
      <h3 className="text-center pb-4">Find Your Country & Show Detials</h3>
      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all-country">All Countries</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
