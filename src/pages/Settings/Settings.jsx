import React from 'react';
import { MdSearch, MdNotifications, MdTimer, MdSettings, MdPerson, MdStore, MdLocationCity, MdCategory, MdReviews, MdCardGiftcard, MdPeople, MdLocalTaxi } from 'react-icons/md';
import './Settings.css';

function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-navbar">
          <h2>Store Settings</h2>
      </div>

      <div className="general-settings">
      <div className="title">
            <MdSettings size={25} className='icon' />
            <span><h4>General Settings</h4></span>
          </div>
        <form action="">
          <label htmlFor="">Meta Tittle</label>
          <input type="text" placeholder='Title'/>
          <label htmlFor="">Meta Tag Keywords</label>
          <input type="text" placeholder='Enter Key words'/>
          <label htmlFor="">Store Theme</label>
          <div className="theme-selection">
            <select name="" id="">
              <option value="">Default</option>
            </select>
          </div>
          <label htmlFor="">Default</label>
          <label htmlFor="">Description</label>
          <input type="text" placeholder='Enter Description'/>
        </form>
      </div>

      <div className="store-settings">
      <div className="title">
            <MdStore size={25} className='icon' />
            <span><h4>Store Settings</h4></span>
          </div>
        <form action="">
            <label htmlFor="">Store Name</label>
            <input type="text"  placeholder='Enter Store Name'/>
            <label htmlFor="">Store Owner Full Name</label>
            <input type="text" placeholder='Enter Full Name'/>
            <label htmlFor="">Owner Phone Number</label>
            <input type="email" placeholder='Enter Owners Email Contact' />
            <label htmlFor="">Full Address</label>
            <input type="text"  placeholder='Type Address'/>
            <label htmlFor="">Zip Code</label>
            <input type="number" placeholder='Enter Your zip-code' />
            <label htmlFor="">City</label>
            <input type="text" placeholder='Enter Your City'/>
            <label htmlFor="">Country</label>
            <input type="text" placeholder='Choose Your Country'/>
        </form>
      </div>


      <div className="localization-settings">
      <div className="title">
            <MdLocationCity size={25} className='icon' />
            <span><h4>Localization Settings</h4></span>
          </div>
      <form action="">
            <label htmlFor="">Country</label>
            <input type="text"  placeholder='Choose a country'/>
            <label htmlFor="">Language</label>
            <input type="text" placeholder='English'/>
            <label htmlFor="">Currency</label>
            <input type="text" placeholder='US Dollar' />
            <label htmlFor="">Lenght Class</label>
            <input type="text"  placeholder='Centimeter'/>
        </form>
      </div>

      <div className="botoms-column">
        <div className="categories-settings">
        <div className="title">
            <MdCategory size={25} className='icon' />
            <span><h4>Categories Settings</h4></span>
          </div>
          <form action="">
            <div className="product-count">
              <label htmlFor="">Yes</label>
              <input type="radio"/>
              <label htmlFor="">No</label>
              <input type="radio"/>
            </div>
              <label htmlFor="">Default Items Per Page</label>
              <input type="number" placeholder='000'/>
          </form>
        </div>

        <div className="review-settings">
        <div className="title">
            <MdReviews size={25} className='icon' />
            <span><h4>Reviews Settings</h4></span>
          </div>
          <form action="">
            <div className="allow-reviews">
              <p>Allow Reviews</p>
                <label htmlFor="">Yes</label>
                <input type="radio"/>
                <label htmlFor="">No</label>
                <input type="radio"/>
            </div>
            <div className="guest-reviews">
                <p>Allow Guest Reviews</p>
                <label htmlFor="">Yes</label>
                <input type="radio"/>
                <label htmlFor="">No</label>
                <input type="radio"/>
            </div>
          </form>
        </div>
        
        <div className="vouchers-settings">
          <div className="title">
            <MdCardGiftcard size={25} className='icon' />
            <span><h4>Vouchers Settings</h4></span>
          </div>
          <form action="">
            <label htmlFor="">Minimum Vouchers</label>
            <input type="number" placeholder='00'/>
            <label htmlFor="">Maximum Vouchers</label>
            <input type="number" placeholder='00' />
          </form>
        </div>

        <div className="tax-settings">
        <div className="title">
          <MdLocalTaxi size={25} className='icon' />
          <span><h4>Tax Settings</h4></span>
        </div>
          <form action="">
            <p>Price with Tax</p>
            <label htmlFor="">Yes</label>
            <input type="radio" />
            <label htmlFor="">No</label>
            <input type="radio" />
            
            <label htmlFor="">Defaul Tax Rate</label>
            <input type="number" placeholder='10%' />
          </form>
        </div>
      </div>

<div className="customers-settings">
  <div className="title">
    <MdPeople size={25} className='icon' />
    <span><h4>Customers Settings</h4></span>
  </div>
  <form action="" className='customer-flex'>
    <div style={{ lineHeight: 2}} className="c-online">
      <p>Customers online</p>
      <label htmlFor="">Yes</label>
      <input type="radio" />
      <label htmlFor="">No</label>
      <input type="radio" />
    </div>
    

    <div style={{ lineHeight: 2}} className="c-Activity">
      <p>Customers Activity</p>
      <label htmlFor="">Yes</label>
      <input type="radio" />
      <label htmlFor="">No</label>
      <input type="radio" />
    </div>
    

    <div style={{ lineHeight: 2}} className="c-Searches">
      <p>Customers Searches</p>
      <label htmlFor="">Yes</label>
      <input type="radio" />
      <label htmlFor="">No</label>
      <input type="radio" />
    </div>
    
    <div style={{ lineHeight: 2}} className="chech-out">
      <p>Allow Guest Checkout</p>
      <label htmlFor="">Yes</label>
      <input type="radio" />
      <label htmlFor="">No</label>
      <input type="radio" />
    </div>

    <div style={{ lineHeight: 2}} className="login">
      <p>Login Display Price</p>
      <label htmlFor="">Yes</label>
      <input type="radio" />
      <label htmlFor="">No</label>
      <input type="radio" />
    </div>
  </form>
  
  <div className="max-login">
  <div className="max-selection">
      <label htmlFor="">Maximum login Attempt</label>
        <select name="" id="">
          <option value="">1 hour</option>
        </select>
  </div>
  </div>
</div>

<div className="change-settings-buttons">
  <button className='cancel'>Cancel</button>
  <button className='save'>Save Change</button>
</div>
      
    </div>
  );
}

export default Settings;