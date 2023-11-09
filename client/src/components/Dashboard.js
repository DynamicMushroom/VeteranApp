// src/components/Dashboard.js
import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';  // Import hooks from react-redux
import { logoutUser } from '../redux/slices/authSlice';  // Import the logout action from authSlice

function Dashboard() { 
  const dispatch = useDispatch();  // Get the dispatch function
  const user = useSelector(state => state.auth.user);  // Access user data from Redux state
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/users/dashboard', {
          withCredentials: true,
        });
        console.log(response.data);
      } catch (error) {
        console.error('Dashboard error:', error);
        // Handle unauthorized access by redirecting to login or showing a message
      }
    }

    fetchData();
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());  // Dispatch the logoutUser action when the button is clicked
  };

  return (
    <div className="dashboard-container">
      {/* Welcome Message */}
      {/*{user && <h2>Welcome, {user.email}!</h2>}*/}
      {/* Profile Icon */}
      <div className="profile-icon-container">
        <Link to="/profile">
          <button className="btn btn-success w-100 rounded-0">Profile</button>
        </Link>
      </div>
      <h1>Military and Veterans Resource Guide</h1>
      <div className="button-group">
      <button className="btn btn-success w-100 rounded-0 custom-btn">
          <Link to="/educational-resources" style={{color: 'white', textDecoration: 'none'}}>
            Educational Resources
          </Link>
        </button>
        <button className="btn btn-success w-100 rounded-0 custom-btn">
          <Link to="/health-resources" style={{color: 'white', textDecoration: 'none'}}>
            Health and Medical Resources
          </Link>
        </button>
        <button className="btn btn-success w-100 rounded-0 custom-btn">
          <Link to="/financial-resources" style={{color: 'white', textDecoration: 'none'}}>
            Financial Resources
          </Link>
        </button>

        <button className="btn btn-success w-100 rounded-0 custom-btn">
          <Link to="/mental-health-resources" style={{color: 'white', textDecoration: 'none'}}>
               Mental Health Resources
          </Link>
        </button>
        <button className="btn btn-success w-100 rounded-0 custom-btn">
          <Link to="/employment-resources" style={{color: 'white', textDecoration: 'none'}}>
          Employment Resources
          </Link>
        </button>

        <button className="btn btn-success w-100 rounded-0 custom-btn">
          <Link to="/housing-resources" style={{color: 'white', textDecoration: 'none'}}>
            Housing Resources
          </Link>
        </button>

        <button className="btn btn-success w-100 rounded-0 custom-btn">
          <Link to="/veterans-claims" style={{color: 'white', textDecoration: 'none'}}>
            Veteran's Claims
          </Link>
        </button>


        <button className="btn btn-success w-100 rounded-0 custom-btn">
        <a 
          href="https://www.va.gov" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{color: 'white', textDecoration: 'none'}}
        >
        VA Resources
        </a>
</button>
      </div>
      {/* Logout Button */}
      <button onClick={handleLogout} className="button">Logout</button>
    </div>
  );
}

export default Dashboard;
