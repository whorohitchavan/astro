
import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginForm.css';
import { supabase } from './supabase';
//import './SuccessPage';


//function Home(){
  //const navigate = useNavigate(); // Use useNavigate hook

  function SuccessPage1(){
    navigate('/success'); // Use navigate to redirect

  }
//}



const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  //const navigate = useNavigate(); // Use useNavigate hook





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

      const { data, error: insertError } = await supabase
        .from('users')
        .upsert([
          {
            email: email,

            password: password,
          },
        ], { onConflict: ['email'] }); 

      if (insertError) {
        throw insertError;
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
                  //onChange={handleRememberMeChange}
                />
                <label htmlFor="rememberMeCheckbox" className="checkboxlabel">
                  Remember Me
                </label>
                <a href="/" className="forgot-password-link">
                 Forgot password?
                </a>

              </div>
            </div>
            <button onClick={SuccessPage1}>Signin </button>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
          <div className="Dont-have-account-yet">
            <label htmlFor="account">
              Don't have an account yet? <a href="signup.html">Signup</a>
            </label>
          </div>
        </form>
      </div>
       // Right Column 
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
















