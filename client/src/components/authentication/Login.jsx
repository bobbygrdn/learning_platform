import React, { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Button from '../landingPage/Button';
import '../../styles/authentication/Login.css';
import Header from '../landingPage/Header';

export default function Login({ token }) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const [disabled, setDisabled] = useState(true);

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
        // TODO: Update once backend is ready
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
        await fetch('/dummyData/users.json')
            .then(response => response.json())
            .then(data => {

                const users = data.users;

                const user = users.find(user => user.username === userName && user.password === password);

                if (user) {
                    if (keepLoggedIn === false) {
                        sessionStorage.setItem('token', user.token);
                    }
                    if (keepLoggedIn === true) {
                        localStorage.setItem('token', user.token);
                    }
                    console.log(user.token)
                    window.alert("Successfully logged in!")
                    if (user.role === "admin") {
                        navigate('/admin/content');
                    } else {
                        navigate('/dashboard/profile');
                    }
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
