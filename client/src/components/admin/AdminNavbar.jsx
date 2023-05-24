import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminNavbar() {

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

    const handleCollapse = () => {
        const sidebar = document.querySelector('.sidebar');

        sidebar.classList.add('sidebarClose', 'hoverable');
    }

    const handleExpand = () => {
        const sidebar = document.querySelector('.sidebar');

        sidebar.classList.remove('sidebarClose', 'hoverable');
    }


    return (
        <aside className='sidebar sidebarClose hoverable' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='menu_content'>
                <ul className='menu_items'>
                    <li className="item">
                        <NavLink className='nav_link' to='/admin/content'>
                            <img className='navlink_icon' src={`${process.env.PUBLIC_URL + "/resources/content_icon.png"}`} alt='Content icon'></img>
                            <p className='navlink'>Content</p>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className='nav_link' to='/admin/analytics'>
                            <img className='navlink_icon' src={`${process.env.PUBLIC_URL + "/resources/analytics_icon.png"}`} alt='Analytics icon'></img>
                            <p className='navlink'>Analytics</p>
                        </NavLink>
                    </li>
                    <li className="item">
                        <NavLink className='nav_link' to='/admin/settings'>
                            <img className='navlink_icon' src={`${process.env.PUBLIC_URL + "/resources/settings_icon.png"}`} alt='Settings icon'></img>
                            <p className='navlink'>Settings</p>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="bottom_content">
                <div className="bottom expand_sidebar" onClick={handleExpand}>
                    <span>Keep Open</span>
                    <i className='bx bx-log-in'></i>
                </div>
                <div className="bottom collapse_sidebar" onClick={handleCollapse}>
                    <span>Keep Closed</span>
                    <i className='bx bx-log-out'></i>
                </div>
            </div>
        </aside>
    )
}
