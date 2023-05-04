import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/dashboard/NavBar.css';

export default function NavBar() {

    function logout() {
        window.localStorage.clear()
    }

    return (
        <ul className='navbar'>
            <NavLink className='catalog' to='/dashboard/catalog'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/catalog_icon.png"}`} alt='Catalog icon'></img>
                <p className='labels'>Catalog</p>
            </NavLink>
            <NavLink className='leaderboard' to='/dashboard/leaderboard'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/leaderboard_icon.png"}`} alt='Leaderboard icon'></img>
                <p className='labels'>Leaderboard</p>
            </NavLink>
            <NavLink className='myLearning' to='/dashboard/myLearning'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/myLearning_icon.png"}`} alt='My Learning icon'></img>
                <p className='labels'>My Learning</p>
            </NavLink>
            <NavLink className='profile' to='/dashboard/profile'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/profile_icon.png"}`} alt='Profile icon'></img>
                <p className='labels'>Profile</p>
            </NavLink>
            <NavLink className='logout' to='/'>
                <img className='navIcon' src={`${process.env.PUBLIC_URL + "/resources/logout_icon.png"}`} alt='Logout icon' onClick={logout}></img>
                <p className='labels'>Logout</p>
            </NavLink>
        </ul>
    )
}
