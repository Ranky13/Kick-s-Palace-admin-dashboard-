import React from 'react';
import './Header.css';
import { MdSearch, MdLightMode, MdDarkMode, MdNotifications, MdMessage, MdSettings, MdTimer } from 'react-icons/md';

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
            <MdSearch size={20}/>
          </button>
        </div>
        <div className="theme"> 
          <MdLightMode className='icons'/>

        </div>
        <div className="notification">
            <MdNotifications className='icons'/>
        </div>
        <div className="settings">
            <MdSettings className='icons'/>
        </div>
        <div className="time-icon">
              <MdTimer className='icons' />
            </div>
        <div className="message">
          <MdMessage className='icons'/>
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