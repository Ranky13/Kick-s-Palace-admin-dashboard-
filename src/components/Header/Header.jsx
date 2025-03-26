import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="user-profile">
          <img src="https://via.placeholder.com/40" alt="User" />
          <span>Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Header;