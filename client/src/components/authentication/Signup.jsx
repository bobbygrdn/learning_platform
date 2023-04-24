import React, { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Button from '../landingPage/Button';
import '../../styles/authentication/Signup.css';
import Header from '../landingPage/Header';

export default function Signup() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [confirmedPassword, setConfirmedPassword] = useState();
    const [email, setEmail] = useState();
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (userName && password && confirmedPassword && email) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userName, password, confirmedPassword, email])

    async function signupUser() {
        // TODO: Update once backend is ready
        // await fetch('http://localhost:3001/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: userName,
        //         password: password,
        //         email: email
        //     }),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         window.alert("Signup successful!");
        //         navigate('/login');
        //     })
        window.alert("Signup successful!")
        navigate('/login');
    }
    return (
        <div className='signup-wrapper'>
            <Header />
            <Form className='signup-form'>
                <h1 className='signupTitle'>Signup</h1>
                <label className='signupUsername'>
                    <p className='signupUserTitle'>Username</p>
                    <input className='signupUserInput' type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} required />
                </label>
                <label className='signupEmail'>
                    <p className='signupEmailTitle'>Email</p>
                    <input className='signupEmailInput' type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                </label>
                <label className='signupPassword'>
                    <p className='signupPasswordTitle'>Password</p>
                    <input className='signupPasswordInput' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number." />
                </label>
                <label className='signupConfirmPassword'>
                    <p className='signupConfirmPasswordTitle'>Confirm Password</p>
                    <input className='signupConfirmPasswordInput' type="password" placeholder="Confirm Password" onChange={e => setConfirmedPassword(e.target.value)} required pattern={`^${password}$`}
                        title="Passwords must match." />
                </label>
                <div>
                    <Button purpose='signup' text='Signup' onClick={signupUser} disabled={disabled} />
                </div>
            </Form>
        </div>
    )
}
