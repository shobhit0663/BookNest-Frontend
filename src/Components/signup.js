// src/components/SignUpForm.js
import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SignUpForm() {
    const [formData, setFormData] = useState({
       aName:'',
       aPass:'',
       email:'',
       mobile:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/signup', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            window.alert('Congratulations! Your registration is successful.');
            setFormData({
                aName: '',
                aPass: '',
                email: '',
                mobile: '',
            },
          navigate('/'));
        } catch (error) {
            window.alert('An error occurred during registration.');
            console.error('Registration error:', error);
        }
    };
    

  return (
    <div className='signupwrapper'>
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="aName">Username :</label>
          <input
            type="text"
            id="aName"
            name="aName"
             placeholder="Enter Username"
            value={formData.aName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
             placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
  <label htmlFor="mobile">Mobile No :</label>
  <input
    type="text"
    id="mobile"
    name="mobile"
    placeholder="Enter Your Mobile Number"
    value={formData.mobile}
    onChange={handleChange}
    required
    pattern="[0-9]{10}" 
    maxLength="10" 
    title="Mobile number must be exactly 10 digits."
  />
</div>



    
    
{/* const handleLogin = () = > {
  // After successful login
  localStorage.setItem("user", JSON.stringify({ username: "testUser" }));
  console.log("User saved to localStorage!");
}; */}


        <div className="form-group">
          <label htmlFor="aPass">Password :</label>
          <input
            type="password"
            id="aPass"
            name="aPass"
             placeholder="Enter Your Password"
            // pattern='(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[@$!%*?&]).{8,}'
            title='Must contain at least one number, one uppercase, and lowercase letter, and at least 8 characters'
            value={formData.aPass}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
        <p className="signin-footer">
   have an account? <Link to={'/'}>Sign IN</Link>
</p>

      </form>
    </div>
    </div>
  );
}

export default SignUpForm;
