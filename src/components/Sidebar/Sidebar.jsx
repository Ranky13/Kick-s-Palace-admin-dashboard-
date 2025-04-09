import React from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  MdHome, MdShoppingCart, MdSettings, MdBarChart, 
  MdDiscount, MdShoppingBag, MdPeople, MdReceipt, MdPerson, MdArrowDropDown, MdArrowRight, MdList, MdGridOn, MdAdd 
} from 'react-icons/md';
import './Sidebar.css';

function Sidebar() {


  const navigate = useNavigate(); 
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleProducts = (e) => {
    if(e.target.closest('.dropdown-toggle')) {
      e.preventDefault();
      setProductsOpen(!productsOpen);
    }else{
      navigate('/products');
      setProductsOpen(!productsOpen);
    }
  };


  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>KICK'S PALACE</h2>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdHome size={20} className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li id='product-column'>
            <div style={{ display: 'flex', flexDirection: 'column', }}>
              <NavLink to="/products" id='productss' onClick={toggleProducts} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <MdShoppingCart size={20} className="icon" />
                <span style={{ marginLeft: '8px'}}>Products</span>
                <span className='dropdowntoggle' style={{ marginLeft: 'auto' }}>
                {productsOpen ? <MdArrowDropDown size={20}/> : <MdArrowRight size={20}/>}
                </span>
              </NavLink>

              {productsOpen && (
                <div className='dropdownlist' style={{marginLeft: '40px', marginTop: '4px', fontSize: '13px' }}>
                      <NavLink to="/productlist" id='li' style={{ display: 'block' }} className={({ isActive }) => `drop-nav-link ${isActive ? 'active' : ''}`}><MdList size={20} className='drop-icon' style={{marginRight: '10px' }} />Product List</NavLink>
                      <NavLink to="/productgrid" id='li' style={{ display: 'block' }} className={({ isActive }) => `drop-nav-link ${isActive ? 'active' : ''}`}><MdGridOn size={20} className='drop-icon' style={{marginRight: '10px' }} />Product Grid</NavLink>
                      <NavLink to="/addNewproduct" id='li' style={{ display: 'block' }} className={({ isActive }) => `drop-nav-link ${isActive ? 'active' : ''}`}><MdAdd  size={20} className='drop-icon' style={{marginRight: '10px' }} />Add New Product</NavLink>
                </div>
              )}
            </div>
          </li>
          <li>
            <NavLink to="/customers" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdPeople size={20} className="icon" />
              <span>Customers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdBarChart size={20} className="icon" />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/discounts" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdDiscount size={20} className="icon" />
              <span>Discounts</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/OrderManagements" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdShoppingBag size={20} className="icon" />
              <span>Order Managements</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/UserManagements" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdPeople size={20} className="icon" />
              <span>User Managements</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Invoice" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdReceipt size={20} className="icon" />
              <span>Invoices</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Profile" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdPerson size={20} className="icon" />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              <MdSettings size={20} className="icon" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;