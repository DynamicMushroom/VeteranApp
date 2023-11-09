import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/slices/authSlice';

function Register() {
    const [credentials, setCredentials] = useState({
        email: '',  // email is used as username
        password: '',
        confirmPassword: ''
    });

    const [localError, setLocalError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authError = useSelector(state => state.auth.error);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (credentials.password !== credentials.confirmPassword) {
            setLocalError('Passwords do not match');
            return;
        }
        dispatch(register(credentials))
            .unwrap()
            .then(() => {
                navigate('/dashboard');
            })
            .catch(() => {
                setLocalError('Registration failed. Please try again.');
            });
    };

    return (
        <div className="form-container">
            <form onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><strong>Email</strong></label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter School Email Address" 
                        value={credentials.email} 
                        onChange={handleChange} 
                        className="form-input form-control" 
                        autoComplete="email" 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        className="form-input form-control" 
                        autoComplete="new-password" 
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label"><strong>Confirm Password</strong></label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="Confirm Password" 
                        value={credentials.confirmPassword} 
                        onChange={handleChange} 
                        className="form-input form-control" 
                        autoComplete="new-password" 
                        required
                    />
                </div>
                <button type="submit" className="form-button btn btn-success w-100 rounded-0">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
            {(localError || authError) && <div className="error-message">{localError || authError}</div>}
        </div>
    );
}

export default Register;
