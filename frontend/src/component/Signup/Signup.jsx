import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'Yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="create-account-page">
      <div className="create-account-container">
        <div className="create-account-header">
          <h1>Create your<br />PopX account</h1>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="input-label" htmlFor="fullName">Full Name<span className="required">*</span></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="input-field"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="input-label" htmlFor="phoneNumber">Phone number<span className="required">*</span></label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="input-field"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="input-label" htmlFor="email">Email address<span className="required">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="input-label" htmlFor="password">Password<span className="required">*</span></label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="input-label" htmlFor="companyName">Company name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="input-field"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          
          <div className="radio-group">
            <p className="radio-label">Are you an Agency?<span className="required">*</span></p>
            <div className="radio-options">
              <label className="radio-container">
                <input
                  type="radio"
                  name="isAgency"
                  value="Yes"
                  checked={formData.isAgency === 'Yes'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span className="radio-text">Yes</span>
              </label>
              
              <label className="radio-container">
                <input
                  type="radio"
                  name="isAgency"
                  value="No"
                  checked={formData.isAgency === 'No'}
                  onChange={handleChange}
                />
                <span className="radio-custom"></span>
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>
          <button onClick={()=>navigate('/setting')} type="submit" className="login-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;