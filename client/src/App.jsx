import './styles/App.css';
import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/dashboard';

function App() {
  const [token, setToken] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage token={token} />,
    },
    {
      path: '/login',
      element: <Login token={token} />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/dashboard',
      element: <Dashboard token={token} />,
    }
  ])

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
