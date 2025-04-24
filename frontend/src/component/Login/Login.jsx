import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Signin to your<br />PopX account</h1>
          <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.</p>
        </div>
        
        <form >
          <div className="form-group">
            <label className="input-label" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder="Enter email address"
              required
            />
          </div>
          
          <div className="form-group">
            <label className="input-label" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder="Enter password"
             
              required
            />
          </div>
          
          <button onClick={()=>navigate('/setting')} type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;