import React, { useEffect } from 'react';
import '../../styles/authentication/Errors.css';

export default function PlatformIssue() {

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className='platformIssueWrapper'>
            <img src={process.env.PUBLIC_URL + '/resources/valorAcademy_logo.png'} alt="Valor Academy logo" />
            <h1>403 Access Denied</h1>
            <p>You are currently using a mobile device.</p>
            <p>Our policies prevent the use of admin personnel from using our admin dashboard on mobile devices.</p>
            <p>Please login on a non-mobile device.</p>
        </div>
    )
}
