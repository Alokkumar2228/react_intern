import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
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

        <form onSubmit={() =>navigate('/setting')}>
          <div className="form-group">
            <TextField
              id="email"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
              placeholder="Enter email address"
              required
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  height: '50px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#8753ff',
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
                },
                '& .MuiInputLabel-root': {
                  transform: 'translate(14px, -6px) scale(0.75)',
                  backgroundColor: 'white',
                  padding: '0 5px',
                  color: '#8753ff',
                  '&.Mui-focused': {
                    color: '#8753ff'
                  }
                }
              }}
            />
          </div>

          <div className="form-group">
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              placeholder="Enter password"
              required
              margin="normal"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  height: '50px',
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#8753ff',
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#ccc',
                },
                '& .MuiInputLabel-root': {
                  transform: 'translate(14px, -6px) scale(0.75)',
                  backgroundColor: 'white',
                  padding: '0 5px',
                  color: '#8753ff',
                  '&.Mui-focused': {
                    color: '#8753ff'
                  }
                }
              }}
            />
          </div>

          <button  type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
