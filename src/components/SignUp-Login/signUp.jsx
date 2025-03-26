import React from 'react'
import './signUp.css'
import logo from '../Assets/logoo.png';
import GoogleIcon from '../Assets/google.png';
import FbIcon from '../Assets/fb.jpeg';
import { Navigate, useNavigate } from 'react-router-dom';


const SignUp = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="signUp-container">
                  <div className="signup-form">
                      <div className="signup-headline">
                      <h2>Create an Account</h2>
                      <p>Create a free Account now</p>
                      </div>
                      <form>
                        <div className="form-group">
                          <input type="text" placeholder="Enter your Full Name" id="full-name" name="full-name" />
                        </div>
                          <div className="form-group">
                              <input type="email" placeholder="Enter your Email" id="email" name="email"/>
                          </div>
                          <div className="form-group">
                              <input type="password" placeholder="Enter your Password" id="password" name="password"/>
                          </div>
                          <div className="form-group">
                            <input type="password" placeholder="Re-enter your password"id="confirm-password" name="confirm-password"/>
                          </div>
                      </form>
                      <button type="submit" className="signup-btn">Sign Up</button>
                      <div className="alternatives">
                          <div className="google-signUp">
                            <img src={GoogleIcon} alt="" />
                              <p>sign up with Google</p>
                          </div>
                          <div className="FB-signUp">
                            <img src={FbIcon} alt="" />
                              <p>sign up with Facebook</p>
                          </div>
                      </div>
                  </div>
                  <div className="divider"></div>
                  <div className="signUp-content">
                      <div className="logo">
                          <img src={logo} alt="Kick Palace logo" />
                          <h2>Kick's Palace</h2>
                      </div>
                      <div className="signUp-welcome">
                      <h2>Welcome To Kick's Palace!</h2>
                      <p>Home of Luxurious and Affordable Fashion Sneakers and Footwears</p>
                      </div>
                      <div className="Already-option">
                      <p>Already have an account?</p>
                      <button className='signup-login-btn' onClick={ ()=> navigate('/login')} type="submit">Log In</button>
                      </div>
                      <p className="privacy-link">Privacy Policy - Terms & Conditions</p>
                  </div>      
              </div>
    </div>
  )
}

export default SignUp