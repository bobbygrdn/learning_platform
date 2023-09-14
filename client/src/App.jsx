import './styles/App.css';
import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/authentication/Login';
import Signup from './components/authentication/Signup';
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/dashboard/Profile';
import MyLearning from './components/dashboard/MyLearning';
import Catalog from './components/dashboard/Catalog';
import Leaderboard from './components/dashboard/Leaderboard';
import AdminDashboard from './components/admin/AdminDashboard';
import ContentCreator from './components/admin/creator/ContentCreator';
import Publisher from './components/admin/Publisher';
import Settings from './components/admin/Settings';
import PlatformIssue from './components/authentication/PlatformIssue';
import Unauthorized from './components/authentication/Unauthorized';
import useAuthStore from './store/useAuthStore';
import Lesson from './components/dashboard/courseContent/Lesson';
import Quiz from './components/dashboard/courseContent/Quiz';
import Questions from './components/dashboard/courseContent/Questions';
import Congratulations from './components/dashboard/courseContent/Congratulations';

function App() {
  const { setAllowRegistration } = useStore(useAuthStore);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="./" element={<LandingPage />} />
        <Route path="./login" element={<Login />} />
        <Route path="./deviceIssue" element={<PlatformIssue />} />
        <Route path="./signup" element={<Signup />} />
        <Route path="./unauthorized" element={<Unauthorized />} />
        <Route path="./dashboard" element={<Dashboard />}>
          <Route path="./dashboard/catalog" element={<Catalog />} />
          <Route path="./dashboard/leaderboard" element={<Leaderboard />} />
          <Route path="./dashboard/myLearning" element={<MyLearning />} />
          <Route path="./dashboard/myLearning/lesson" element={<Lesson />} />
          <Route path="./dashboard/myLearning/quiz" element={<Quiz />} />
          <Route path="./dashboard/myLearning/questions" element={<Questions />} />
          <Route path="./dashboard/myLearning/congratulations" element={<Congratulations />} />
          <Route path="./dashboard/profile" element={<Profile />} />
        </Route>
        <Route path="./admin" element={<AdminDashboard />}>
          <Route path="./admin/creator" element={<ContentCreator />} />
          <Route path="./admin/publisher" element={<Publisher />} />
          <Route path="./admin/settings" element={<Settings />} />
        </Route>
      </Route>
    )
  );

  useEffect(() => {
    fetch("https://valor-academy-api.onrender.com/api/v1/settings")
      .then(response => response.json())
      .then(data => {
        setAllowRegistration(data[0].registrations);
      })
      .catch(error => console.error(error));
  }, [setAllowRegistration])

  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </div>
  );
}

export default App;
