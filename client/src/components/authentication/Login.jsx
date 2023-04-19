import React, { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import UseLocalStorage from '../../hooks/useLocalStorage';
import UseSessionStorage from '../../hooks/useSessionStorage';
import Button from '../landingPage/Button';
import '../../styles/authentication/Login.css';
import Header from '../landingPage/Header';

export default function Login() {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [token, setToken] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        if (userName && password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userName, password])

    const loginUser = async (e) => {
        e.preventDefault();
        // TODO: Update once backed is ready
        // await fetch('http://localhost:3001/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: userName,
        //         password: password
        //     }),
        // })
        await fetch('/dummyData/token.json')
            .then(response => response.json())
            .then(data => {
                if (data.length !== 0) {
                    if (keepLoggedIn === false) {
                        UseSessionStorage('token', data.token);
                    }
                    if (keepLoggedIn === true) {
                        UseLocalStorage('token', data.token);
                    }
                    setToken(data.token);
                    navigate('/dashboard');
                } else {
                    window.alert("User not found!")
                }
            })
    }

    if (token != null) {
        navigate('/dashboard')
    }

    return (
        <div className='login-wrapper'>
            <Header />
            <Form className='login-form'>
                <h1 className='loginTitle'>Login</h1>
                <label className='username'>
                    <p className='userTitle'>Username</p>
                    <input className='userInput' type="text" placeholder="Username" onChange={e => setUserName(e.target.value)} />
                </label>
                <label className='password'>
                    <p className='passwordTitle'>Password</p>
                    <input className='passwordInput' type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
                </label>
                <label className='keepLoggedIn'>
                    <p className='subheading'>Keep me logged in</p>
                    <input className='checkbox' type="checkbox" onChange={e => setKeepLoggedIn(e.target.checked)} required />
                </label>
                <div disabled={disabled}>
                    <Button purpose='login' text='Login' onClick={loginUser} />
                </div>
                <p className='signupAccount'>If you do not have an account, please <a href="/signup">signup</a> here.</p>
            </Form>
        </div>
    )
}
