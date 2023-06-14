import React, { useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminHeader from './AdminHeader';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminDashboard.css';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';

export default function AdminDashboard() {

    const { role } = useStore(useAuthStore);

    const navigate = useNavigate();

    useEffect(() => {
        if (role == null || role === "User") {
            navigate('/unauthorized');
        }
    }, [navigate, role])

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
