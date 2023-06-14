import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/authentication/Errors.css';

export default function Unauthorized() {

    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(countdown => countdown - 1);
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            navigate('/login');
        }
    }, [countdown, navigate]);

    return (
        <div className='unauthorizeWrapper'>
            <img src={process.env.PUBLIC_URL + '/resources/valorAcademy_logo.png'} alt="Valor Academy logo" />
            <h1>403 Access Denied</h1>
            <p>You do not have permission to access this page.</p>
            <p>You will be redirected to the login page in <strong className='counter'>{countdown}</strong> seconds.</p>
        </div>
    )
}
