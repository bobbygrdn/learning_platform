import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/admin/AdminNavBar.css';

export default function AdminNavbar() {

    function logout() {
        window.localStorage.clear()
    }

    return (
        <ul className='navbar'>
            <NavLink className='content' to='/admin/content'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/content_icon.png"}`} alt='Content icon'></img>
                <p className='labels'>Content</p>
            </NavLink>
            <NavLink className='analytics' to='/admin/analytics'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/analytics_icon.png"}`} alt='Analytics icon'></img>
                <p className='labels'>Analytics</p>
            </NavLink>
            <NavLink className='settings' to='/admin/settings'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/settings_icon.png"}`} alt='Settings icon'></img>
                <p className='labels'>Settings</p>
            </NavLink>
            <NavLink className='logout' to='/'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/logout_icon.png"}`} alt='Logout icon' onClick={logout}></img>
                <p className='labels'>Logout</p>
            </NavLink>
        </ul>

    )
}
