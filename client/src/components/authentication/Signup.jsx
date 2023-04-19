import React, { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Button from '../landingPage/Button';

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

    const signupUser = async () => {
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
        await fetch('/dummyData/users.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password: password,
                email: email
            })
        })
            .then(response => response.json())
            .then(data => {
                window.alert("Signup successful!");
                navigate('/login');
            })
    }
    return (
        <div className='signup-wrapper'>
            <h1>Signup</h1>
            <Form>
                <label>
                    <p>Username</p>
                    <input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} required />
                </label>
                <label>
                    <p>Email</p>
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$' oninvalid="this.setCustomValidity('Please input a proper email address.')" oninput="setCustomValidity('')" required />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$' oninvalid="this.setCustomValidity('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.')" oninput="setCustomValidity('')" required />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" placeholder="Confirm Password" onChange={e => setConfirmedPassword(e.target.value)} pattern={`^${password}$`} oninvalid="this.setCustomValidity('Passwords must match.')" oninput="setCustomValidity('')" required />
                </label>
                <div disabled={disabled}>
                    <Button purpose='signup' text='Signup' onClick={signupUser} />
                </div>
            </Form>
        </div>
    )
}
