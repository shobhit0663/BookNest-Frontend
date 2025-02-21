import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserSignIn.css';
import NavigationBar from "./navigationbar";
import { UserContext } from './UserContext';


const UserSignIn = () => {
  
  let { user, setuser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    aName: '',
    aPass: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
 // Access context values
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post(`http://localhost:8080/signup/signin?aName=${formData.aName}&aPass=${formData.aPass}`)
      .then((response) => {
      
        console.log(response);

        if (response.data === 'Failed: Invalid username or password.') {
          window.alert('Login failed. Please check your username and password.');
        } else {
          const responseData = response.data;
          console.log('Response Data:', responseData);
          window.alert('Login successful!');
          navigate('/home'); // Navigate to the home page

         // Set the user as logged in in context
        }
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
        
      });
  };

  return (
    <div className="signin-wrapper"> {/* Added wrapper for centering */}
      <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}>
          <h1 className="signin-title">LOGIN</h1>
          <div className="signin-form-group">
            <label htmlFor="aName" className="signin-label">Username</label>
            <input
              type="text"
              id="aName"
              name="aName"
              placeholder="Enter Your Username"
              value={formData.aName}
              onChange={handleChange}
              className="signin-input"
              required
            />
          </div>
          <div className="signin-form-group">
            <label htmlFor="aPass" className="signin-label">Password</label>
            <input
              type="password"
              id="aPass"
              name="aPass"
              placeholder="Enter Your Password"
              value={formData.aPass}
              onChange={handleChange}
              className="signin-input"
              required
            />
          </div>
          <button type="submit" className="signin-button">Login</button>
        </form>
        <p className="signin-footer">
          Don't have an account? <a href="/signup" className="signin-link">Register Here</a>
        </p>
      </div>
    </div>
  );
};

export default UserSignIn;
