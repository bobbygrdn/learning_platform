import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Header from '../landingPage/Header';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../styles/dashboard/Dashboard.css';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';

export default function Dashboard() {

    const { token } = useStore(useAuthStore);

    const navigate = useNavigate();

    useEffect(() => {
        if (token == null) {
            navigate('/');
        }
    }, [navigate, token])

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
