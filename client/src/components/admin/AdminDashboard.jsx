import React from 'react';
import AdminNavbar from './AdminNavbar';
import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';
import '../../styles/admin/AdminDashboard.css';

export default function AdminDashboard() {
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
