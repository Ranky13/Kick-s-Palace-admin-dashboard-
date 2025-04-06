import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdHome, MdShoppingCart, MdSettings,MdBarChart, MdDiscount, MdShoppingBag, MdPeople, MdReceipt, MdPerson,} from 'react-icons/md';
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
            <Link to="/" className="nav-link">
            <MdHome size={20} className="icon" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className='nav-link'>GI
            <MdShoppingCart size={20} className="icon" />
            <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/customers" className="nav-link">
            <MdPeople size={20} className="icon" />
            <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="nav-link">
            <MdBarChart size={20} className="icon" />
            <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to="/discounts" className="nav-link">
            <MdDiscount size={20} className="icon" />
            <span>Discounts</span>
            </Link>
          </li>
          <li>
            <Link to="/OrderManagements" className="nav-link">
            <MdShoppingBag size={20} className="icon" />
              <span>Order Managements</span>
            </Link>
          </li>
          <li>
            <Link to="/UserManagements" className="nav-link">
            <MdPeople size={20} className="icon" />
              <span>User Managements</span>
            </Link>
          </li>
          <li>
            <Link to="/Invoice" className="nav-link">
            <MdReceipt size={20} className="icon" />
            <span>Invoices</span>
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="nav-link">
            <MdPerson size={20} className="icon" />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-link">
            <MdSettings size={20} className="icon" />
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
