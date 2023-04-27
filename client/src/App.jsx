import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/dashboard/Profile';
import MyLearning from './components/dashboard/MyLearning';
import Catalog from './components/dashboard/Catalog';
import Leaderboard from './components/dashboard/Leaderboard';

function App() {
  const [token, setToken] = useState(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage token={token} />} />
        <Route path="/login" element={<Login token={token} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard token={token} />}>
          <Route path="/dashboard/catalog" element={<Catalog />} />
          <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/myLearning" element={<MyLearning />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
      </Route>
    )
  );

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [token]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
