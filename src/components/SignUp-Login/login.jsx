import React from 'react';
import './login.css';
import logo from '../assets/logoo.png';
import GoogleIcon from '../Assets/google.png';
import FbIcon from '../Assets/fb.jpeg';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const login = () => {

    const navigate = useNavigate();

  return (
    <div>
        <div className="login-container">
            <div className="login-form">
                <div className="login-headline">
                <h2>Log In</h2>
                <p>login to access kick's palace account </p>
                </div>
                <form>
                    <div className="form-group">
                        <input type="email" placeholder="Enter your Email" id="Login-email" name="email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Enter your Password" id="Login-password" name="password"/>
                    </div>
                    <div className="remember-me">
                        <input type="checkbox" id="remember" name="remember"/>
                        <label htmlFor="remember">Remember Me</label>
                    </div>
                </form>
                <div className="password-reset">
                    <p>can't access your account? <a href="#">Reset your Password now!</a></p>
                </div>
                <button type="submit" className="login-btn">Login</button>
                <div className="alternatives">
                    <div className="google-signUp">
                        <img src={GoogleIcon} alt="" />
                        <p>sign in with Google</p>
                    </div>
                    <div className="FB-signUp">
                        <img src={FbIcon} alt="" />
                        <p>sign in with Facebook</p>
                    </div>
                </div>
            </div>
            <div className="divider-line"></div>
            <div className="login-content">
                <div className="logo">
                    <img src={logo} alt="Kick Palace logo" />
                    <h2>Kick's Palace</h2>
                </div>
                <div className="welcome-messg">
                <h1>Welcome Back!</h1>
                <p>Please Login to access your Account.</p>
                <div className="signup-option">
                <p>Don't have an account?</p>
                <button className='continueloggedin' onClick={ ()=> navigate('/continueLoggedIn')}>continu</button>
                <button type="submit" className='login-signup-btn' onClick={()=> navigate('/signUp')}>Sign Up</button>
                </div>
                
                </div>
               
                <p className="privacy-link">Privacy Policy - Terms & Conditions</p>
            </div>      
        </div>
    </div>
  )
}

export default login