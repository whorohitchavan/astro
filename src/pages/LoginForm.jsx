// LoginForm.js
import React, { useState } from 'react';
//import { default as pkg } from 'react-router-dom';
//const { useHistory } = pkg;
import './LoginForm.css'; 
//import logoImage from './images/logo.jpg';
//import dataArrangingImage from './images/Data Arranging_Two Color.jpg';
import { supabase } from './supabase'; 
import './SuccessPage'


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const navigate = useHistory();
  //const [rememberMe, setRememberMe] = useState(true); 
  const [responseMessage, setResponseMessage] = useState("");
  //const history = useHistory(); // Create a history object


  //const handleEmailChange = (e) => setEmail(e.target.value);
  //const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
  
    try {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
  
      
      if (error) {
        throw error;
      }

      setResponseMessage("Check your email for a verification link");

    } catch (error) {
      setResponseMessage(error.message);
    }
  };
  
  return (
    <div className="container" id="home">
      <div className="login-left">
        <div className="login-header">
          <h1>Sign in</h1>
        </div>
          <img
    className="logo"
      src="https://magicainew.codeshastra.dev/assets/img/logo/magicAI-logo.svg"
    alt="Your Company"
  />

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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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
                  //checked={rememberMe}
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
            {responseMessage && <p>{responseMessage}</p>}
          </div>
          <div className="Dont-have-account-yet">
            <label htmlFor="account">
              Don't have an account yet? <a href="signup.html">Signup</a>
            </label>
          </div>
        </form>
      </div>
       {/* Right Column */}
      <div className="flex-1 relative">
  <div className="flex justify-end items-center h-full"> {/* Image container */}
    <img
      className="background"
      src="https://magicai.liquid-themes.com/images/bg/bg-auth.jpg"
      alt="Background Auth"
    />
     <div
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    ><img
        className="page"
        src="https://magicai.liquid-themes.com/images/bg/dash-mockup.jpg"
        alt="Dashboard Mockup"
        style={{
          marginTop: "150px",
          marginRight: "-50%", 
          marginLeft: "200px", 
          width: "95%",
          borderRadius:"30px" 
        }}
      />
    </div>
        </div>
    </div>
    </div>

  );
};

export default LoginForm;
