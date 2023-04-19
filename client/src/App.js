import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/dashboard';


function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage token={token} />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/dashboard' element={<Dashboard token={token} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
