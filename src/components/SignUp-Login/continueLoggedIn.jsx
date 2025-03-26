import React from 'react'
import './continueLoggedIn.css';
import logo from '../Assets/logoo.png';
import { Navigate, useNavigate } from 'react-router-dom';

const continueLoggedIn = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="continueLoggedIn-container">
                <div className="continueLoggedIn-form">
                <div className="Avatar">
                    <img src="" alt="avatar" />
                </div>
                      <div className="continueLoggedIn-headline">
                      <h2>Log In to continue</h2>
                      <p>Enter your password  to continue </p>
                      </div>
                      <div className="welcomeBackMSsg">
                        <h3>Welcome Back Rokeeb!</h3>
                      </div>
                      <form>
                          <div className="form-group">
                              <input type="password" placeholder="Enter your Password" id="continueLoggedIn-password" name="continueLoggedIn-password"/>
                          </div>
                      </form>
                      <button type="submit" className="continueLoggedIn-btn">Continue</button>
                  </div>
                  <div className="divider"></div>
                  <div className="continueLoggedIn-content">
                      <div className="logo">
                          <img src={logo} alt="Kick Palace logo" />
                          <h2>Kick's Palace</h2>
                      </div>
                      <h1>Do a Different Action?</h1>
                      <div className="different-action-buttons">
                        <button className='login-signup-btn' onClick={ ()=> navigate('/login')}>Log In</button>
                        <p>or</p>
                        <button className='login-signup-btn' onClick={ ()=> navigate('/signUp')}>Create an Account</button>
                      </div>
                      <p className="privacy-link">Privacy Policy - Terms & Conditions</p>
                  </div>      
              </div>
    </div>
  )
}

export default continueLoggedIn
