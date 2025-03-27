// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>KICK'S PALACE</h2>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <i className="fas fa-shopping-cart"></i>
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/customers">
              <i className="fas fa-users"></i>
              <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics">
              <i className="fas fa-chart-line"></i>
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/discounts">
              <i className="fas fa-tag"></i>
              <span>Discounts</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;