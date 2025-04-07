import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="user-profile">
          <div className="Avatar">
          <img src="" alt="User" />
          </div>
          <span>Admin</span>
        </div> 
      </div>
    </header>
  );
}

export default Header;