import React, { useState } from 'react';
import './Alogin.css';
export default function Alogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (username === '' || password === '') {
        setMessage('Please enter both username and password.');
      } else {
        setMessage(`Login successful! Welcome, ${username}.`);
      }
    }
  
    return (
      <div className="Alogin-container">
        <div className="Alogin-card">
          <h2>Welcome Admin</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className= "submit" type="submit">Login</button>
          </form>
          <div className="button-group">
            <button className="forgot-password-button">Forgot Password?</button>
          </div>
          <p className="message">{message}</p>
        </div>
      </div>
    );
  }