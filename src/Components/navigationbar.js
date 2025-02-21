import React, { useState, useEffect, useContext } from "react";
import "./navigationbar.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let {user}=useContext(UserContext)


  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   console.log("User from localStorage:", user); // Debugging purpose
  //   if (user) {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  
  

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    setIsLoggedIn(false);
    navigate("/"); // Redirect to login page
  };

  function checkuser() {
    if (user) {
      navigate("/home"); // Redirect if logged in
    } else {
      
    }
  }
  
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a>
          <img
            src="https://img.freepik.com/free-vector/gradient-bookstore-logo_23-2149332421.jpg"
            alt="Bookstore Logo"
            className="logo-img"
          />
          SHOBHIT BOOKSTORE
        </a>
      </div>

      {/* Navbar links */}
      <ul className="navbar-links">
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Navbar actions */}
      <div className="navbar-actions">
        <Link to="/cart" className="btn-login">Cart</Link>

        {isLoggedIn ? (
          <button className="btn-logout" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="btn-login"><Link to =  {'/'} className="btn-login">Login</Link></button>
        )}
      </div>
    </nav>
  );

}
export default NavigationBar;
