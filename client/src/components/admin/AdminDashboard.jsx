import React from 'react';
import AdminNavbar from './AdminNavbar';
import Header from '../landingPage/Header';
import { Outlet } from 'react-router-dom';
import '../../styles/admin/AdminDashboard.css';

export default function AdminDashboard() {
    return (
        <div className='admin'>
            <Header />
            <main>
                <Outlet />
            </main>
            <AdminNavbar />
        </div>
    )
}
