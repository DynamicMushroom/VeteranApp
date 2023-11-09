// Recover.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { recoverPassword } from '../redux/slices/authSlice';  

function Recover() {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setEmail(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(recoverPassword(email));  
    };
    
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Recover Password</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        required
                        className="form-input form-control"
                    />
                </div>
                <button type="submit" className="form-button btn btn-success w-100 rounded-0">Submit</button>
                <p>Return to Login?<Link to='/login'> Back</Link></p>
            </form>
        </div>
    );
}

export default Recover;
