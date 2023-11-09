import { logoutUser } from '../redux/slices/authSlice';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    branch_of_service: '',
    years_of_service: '',
    date_of_birth: '',
    bio: '',
    profile_picture: null,
  });

  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:5000/users/profile/${user.id}`, {
          withCredentials: true,
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Profile fetch error:', error);
        setError('Failed to fetch profile information. Please try again later.');
      }
    }

    if (!user) {
      setError('User not logged in');
      return;
    }

    fetchData();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProfile({
      ...profile,
      profile_picture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setError('User not logged in');
      return;
    }
    const formData = new FormData();
    Object.keys(profile).forEach(key => {
      formData.append(key, profile[key]);
    });

    try {
      await axios.post(`http://localhost:5000/users/profile/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      
      setUpdateSuccess(true);
      setError(null); // clear any previous error
    } catch (error) {
      console.error('Profile update error:', error);
      setError('Failed to update profile. Please try again later.');
      setUpdateSuccess(false);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return(
    <div className="form-container">
        {error && <div className="error-message">{error}</div>} 
        {updateSuccess && <div className="success-message">Profile updated successfully!</div>}
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={profile.first_name}
                onChange={handleChange}
                className="form-input"
                autoComplete="given-name" 
            />
            <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={profile.last_name}
                onChange={handleChange}
                className="form-input"
                autoComplete="family-name" 
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={profile.email}
                onChange={handleChange}
                className="form-input"
                autoComplete="email" 
            />
            <input
                type="text"
                name="branch_of_service"
                placeholder="Branch of Service"
                value={profile.branch_of_service}
                onChange={handleChange}
                className="form-input"
                autoComplete="organization" 
            />
            <input
                type="number"
                name="years_of_service"
                placeholder="Years of Service"
                value={profile.years_of_service}
                onChange={handleChange}
                className="form-input"
                autoComplete="off" 
            />
            <input
                type="date"
                name="date_of_birth"
                placeholder="Date of Birth"
                value={profile.date_of_birth}
                onChange={handleChange}
                className="form-input"
                autoComplete="birthday" 
            />
            <textarea
                name="bio"
                placeholder="Bio"
                value={profile.bio}
                onChange={handleChange}
                className="form-input"
                autoComplete="off" 
            />
            <input 
                name="profile_picture"
                onChange={handleFileChange}
                className="form-input"
                autoComplete="off" 
                type="file"
            />
            <button type="submit" className="form-button">Update Profile</button>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </form>
    </div>
  );
}

export default Profile;
