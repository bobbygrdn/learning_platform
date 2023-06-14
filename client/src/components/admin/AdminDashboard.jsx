import React, { useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminHeader from './AdminHeader';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminDashboard.css';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';

export default function AdminDashboard() {

    const { token } = useStore(useAuthStore);

    const navigate = useNavigate();

    useEffect(() => {
        if (token == null) {
            navigate('/');
        }
    }, [navigate, token])

    return (
        <div className='admin'>
            <AdminHeader />
            <AdminNavbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
