import './styles/App.css';
import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/dashboard/Profile';
import MyLearning from './components/dashboard/MyLearning';
import Catalog from './components/dashboard/Catalog';
import Leaderboard from './components/dashboard/Leaderboard';
import AdminDashboard from './components/admin/AdminDashboard';
import Content from './components/admin/content/Content';
import Analytics from './components/admin/Analytics';
import Settings from './components/admin/Settings';
import PlatformIssue from './components/authentication/PlatformIssue';
import useAuthStore from './store/useAuthStore';

function App() {
  const { token, setToken, allowRegistration, setAllowRegistration } = useStore(useAuthStore);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LandingPage token={token} />} />
        <Route path="/login" element={<Login token={token} />} />
        <Route path="/deviceIssue" element={<PlatformIssue />} />
        <Route path="/signup" element={<Signup allowRegistration={allowRegistration} />} />
        <Route path="/dashboard" element={<Dashboard token={token} />}>
          <Route path="/dashboard/catalog" element={<Catalog />} />
          <Route path="/dashboard/leaderboard" element={<Leaderboard />} />
          <Route path="/dashboard/myLearning" element={<MyLearning />} />
          <Route path="/dashboard/profile" element={<Profile />} />
        </Route>
        <Route path="/admin" element={<AdminDashboard token={token} />}>
          <Route path="/admin/content" element={<Content />} />
          <Route path="/admin/analytics" element={<Analytics />} />
          <Route path='/admin/settings' element={<Settings />} />
        </Route>
      </Route>
    )
  );

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [setToken, token]);

  useEffect(() => {
    fetch("/api/v1/settings")
      .then(response => response.json())
      .then(data => {
        setAllowRegistration(data[0].registrations);
      })
      .catch(error => console.error(error));
  })

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
