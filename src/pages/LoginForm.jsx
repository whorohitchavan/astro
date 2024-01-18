// LoginForm.js
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import './style.css'; 
import logoImage from './images/logo.jpg';
import dataArrangingImage from './images/Data Arranging_Two Color.jpg';
import { supabase } from './Supabase'; 
//import './Dashboard'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(true); 


  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe); 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
  
    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        email: 'whorohitchavan@gmail.com',
      });
  
      if (error) {
        if (error.response?.status === 429) {
          // Implement backoff and retry
          console.log('Rate limit exceeded. Retrying after a delay...');
          await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay
          return handleSubmit(e); // Retry the request
        }
  
        console.error('Authentication error:', error.message);
      } else {
        console.log('Authentication successful:', data);
      // navigate(`/dashboard/${email}`);
      }
    } catch (error) {
      console.error('Error during authentication:', error.message);
    }
  };
  
  return (
    <div className="container" id="home">
      <div className="login-left">
        <div className="login-header">
          <h1>Sign in</h1>
        </div>
        <img src="https://magicainew.codeshastra.dev/assets/img/logo/magicAI-logo.svg" alt="Logo" className="logo" />

        <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
          <div className="login-content">
            <div className="form-item">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your Password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="pass-key"
              />
            </div>
            <div className="form-item">
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="rememberMeCheckbox"
                  id="rememberMeCheckbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberMeCheckbox" className="checkboxlabel">
                  Remember Me
                </label>
                <a href="/" className="forgot-password-link">
                 Forgot password?
                </a>

              </div>
            </div>
            <button type="submit">Sign In</button>
          </div>
          <div className="Dont-have-account-yet">
            <label htmlFor="account">
              Don't have an account yet? <a href="signup.html">Signup</a>
            </label>
          </div>
        </form>
      </div>
      <div className="login-right">
        <img src="https://magicainew.codeshastra.dev/images/bg/dash-mockup.jpg" alt="Data Arranging" />
      </div>
    </div>
  );
};

export default LoginForm;
