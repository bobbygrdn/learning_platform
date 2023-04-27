import React from 'react';
import NavBar from './NavBar';
import Header from '../landingPage/Header';
import { Outlet } from 'react-router-dom';
import '../../styles/dashboard/Dashboard.css';

export default function Dashboard() {
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
