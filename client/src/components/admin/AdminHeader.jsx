import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminHeader() {

    function logout() {
        window.localStorage.clear()
    }

    const handleClick = () => {
        const sidebarOpen = document.querySelector('#sidebarOpen');

        sidebarOpen.classList.toggle('close');
    }

    return (
        <nav className='adminNavbar'>
            <div className="logo_item">
                <i className="bx bx-menu" id="sidebarOpen" onClick={handleClick}></i>
                Valor Academy
                <img className='adminLogo' src={`${process.env.PUBLIC_URL + "/resources/valorAcademy_logo.png"}`} alt="" />
            </div>

            <NavLink className='logout_container' to='/'>
                <span className='logout_text'>Logout</span>
                <img className='logout' src={`${process.env.PUBLIC_URL + "/resources/logout_icon.png"}`} alt='Logout icon' onClick={logout}></img>
            </NavLink>
        </nav>
    )
}
