// Login.js
import React, { useState } from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/slices/authSlice';

function Login() {
    const [credentials, setCredentials] = useState({
        email: '',  //Enter email address
        password: '' //Enter Password
    });
    const [localError, setLocalError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authError = useSelector(state => state.auth.error);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        dispatch(login(credentials))
            .unwrap()
            .then(() => {
                navigate('/dashboard');
            })
            .catch((error) => {
                console.error('Login error:', error);
                setLocalError('Invalid email or password.');  // <-- update error message
            });
    };
    

    return (
        <div className="form-container"> 
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label"><strong>Email:</strong></label> 
                    <input 
                        type="email"  
                        name="email"
                        placeholder="Enter email address"
                        id="email"  
                        value={credentials.email}
                        onChange={handleChange} 
                        required 
                        autoComplete="email"  
                        className="form-input form-control" 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label"><strong>Password:</strong></label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Enter password"
                        id="password" 
                        value={credentials.password} 
                        onChange={handleChange} 
                        required 
                        autoComplete="current-password" 
                        className="form-input form-control"  
                    />
                </div>
                <button type="submit" className="form-button btn btn-success w-100 rounded-0">Login</button> 
                <p>Don't have an account? Create one today! <Link to='/register'>Register</Link></p>
                <p>Forgot your password? <Link to='/recover'>Recover</Link></p>
                {(localError || authError) && <div className="error-message">{localError || authError}</div>} 
            </form>
        </div>
    );
}

export default Login;
