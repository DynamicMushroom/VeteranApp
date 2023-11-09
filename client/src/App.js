// Import Statements 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import FinancialResources from './components/FinancialResources';
import HousingResources from './components/HousingResources';
import EducationalResources from './components/EducationalResources';
import HealthResources from './components/HealthResources'; 
import MentalHealthResources from './components/MentalHealth';
import EmploymentResources from './components/EmploymentResources';
import './App.css';
import VeteransClaimsResources from './components/VeteransClaimsResources';
import Recover from './components/Recover';  // Import the RecoverPassword component

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover" element={<Recover/>} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/profile" 
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/housing-resources" 
              element={
                <PrivateRoute>
                  <HousingResources />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/educational-resources" 
              element={
                <PrivateRoute>
                  <EducationalResources />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/financial-resources" 
              element={
                <PrivateRoute>
                  <FinancialResources />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/health-resources"  
              element={
                <PrivateRoute>
                  <HealthResources />
                </PrivateRoute>
              } 
            />

            <Route
            path="/employment-resources"
            element={
              <PrivateRoute>
                <EmploymentResources />
              </PrivateRoute>
            }
            />

            <Route 
              path="/veterans-claims" 
              element={
                <PrivateRoute>
                  <VeteransClaimsResources />
                </PrivateRoute>
              }
            />


            <Route 
              path="/mental-health-resources" 
              element={
        <PrivateRoute>
            <MentalHealthResources />
        </PrivateRoute>
    } 
/>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
