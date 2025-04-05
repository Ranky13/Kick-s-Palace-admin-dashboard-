import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate('/login');
  };
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
          <li>
            <Link to="/OrderManagements">
              <i className="fas fa-tag"></i>
              <span>Order Managements</span>
            </Link>
          </li>
          <li>
            <Link to="/UserManagements">
              <i className="fas fa-tag"></i>
              <span>User Managements</span>
            </Link>
          </li>
          <li>
            <Link to="/Invoice">
              <i className="fas fa-tag"></i>
              <span>Invoices</span>
            </Link>
          </li>
          <li>
            <Link to="/Profile">
              <i className="fas fa-tag"></i>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <i className="fas fa-tag"></i>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="logout-container">
        <button className="logout-btn" onClick={handleLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Log Out</span>
        </button>
      </div> 
    </aside>
  );
}

export default Sidebar;
