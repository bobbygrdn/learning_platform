import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';

export default function AdminHeader() {

    const { setToken, setRole } = useStore(useAuthStore);

    function logout() {
        localStorage.clear();
        setToken(null);
        setRole(null);
    }

    return (
        <nav className='adminNavbar'>
            <div className="logo_item">
                Valor Academy
                <img className='adminLogo' src={`${process.env.PUBLIC_URL + "/resources/valorAcademy_logo.png"}`} alt="" />
            </div>

            <NavLink className='logout_container' to={'/login'} onClick={logout}>
                <span className='logout_text'>Logout</span>
                <img className='logout' src={`${process.env.PUBLIC_URL + "/resources/logout_icon.png"}`} alt='Logout icon'></img>
            </NavLink>
        </nav>
    )
}
