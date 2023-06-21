import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'zustand';
import useTableStore from '../../store/useTableStore';

export default function AdminNavbar() {

    const { setCurrentTable } = useStore(useTableStore);

    const handleMouseEnter = () => {
        const sidebar = document.querySelector('.sidebar');

        if (sidebar.classList.contains("hoverable")) {
            sidebar.classList.remove("sidebarClose");
        }
    }

    const handleMouseLeave = () => {
        const sidebar = document.querySelector('.sidebar');

        if (sidebar.classList.contains("hoverable")) {
            sidebar.classList.add("sidebarClose");
        }
    }

    const handleClick = () => {
        setCurrentTable("Courses");
    }

    return (
        <aside className='sidebar sidebarClose hoverable' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='menu_content'>
                <ul className='menu_items'>
                    <li className="item">
                        <NavLink className='nav_link' to='/admin/creator' onClick={handleClick}>
                            <img className='navlink_icon' src={`${process.env.PUBLIC_URL + "/resources/content_icon.png"}`} alt='Content icon'></img>
                            <p className='navlink'>Creator</p>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className='nav_link' to='/admin/publisher' onClick={handleClick}>
                            <img className='navlink_icon' src={`${process.env.PUBLIC_URL + "/resources/analytics_icon.png"}`} alt='Analytics icon'></img>
                            <p className='navlink'>Publisher</p>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className='nav_link' to='/admin/settings' onClick={handleClick}>
                            <img className='navlink_icon' src={`${process.env.PUBLIC_URL + "/resources/settings_icon.png"}`} alt='Settings icon'></img>
                            <p className='navlink'>Settings</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
