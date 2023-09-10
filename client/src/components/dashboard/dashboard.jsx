import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Header from '../landingPage/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../styles/dashboard/Dashboard.css';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';
import useCredentialStore from '../../store/useCredentialsStore';

export default function Dashboard() {

    const { role, setMyCourses } = useStore(useAuthStore);
    const { userId } = useStore(useCredentialStore);

    const navigate = useNavigate();

    useEffect(() => {
        if (role == null || role === "admin") {
            navigate('/unauthorized');
        }
    }, [navigate, role])

    useEffect(() => {
        fetch(`/api/v1/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                setMyCourses(data.courses);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='dashboard'>
            <Header />
            <main>
                <Outlet />
            </main>
            <NavBar />

        </div>
    )
}
