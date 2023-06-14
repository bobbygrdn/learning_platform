import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Header from '../landingPage/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../styles/dashboard/Dashboard.css';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';

export default function Dashboard() {

    const { role } = useStore(useAuthStore);

    const navigate = useNavigate();

    useEffect(() => {
        if (role == null || role === "admin") {
            navigate('/unauthorized');
        }
    }, [navigate, role])

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
