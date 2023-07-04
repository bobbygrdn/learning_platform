import React, { useEffect } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Button from '../landingPage/Button';
import '../../styles/authentication/Login.css';
import Header from '../landingPage/Header';
import { useStore } from 'zustand';
import useCredentialStore from '../../store/useCredentialsStore';
import { toast } from 'react-toastify';
import useAuthStore from '../../store/useAuthStore';

export default function Login() {
    const { userName, setUserName, password, setPassword, setUserId, disabled, setDisabled, setExperience, setLearningStreak, SetTitle, setMastery } = useStore(useCredentialStore);

    const { role, setToken, setRole } = useStore(useAuthStore);

    const navigate = useNavigate();

    useEffect(() => {
        if (userName && password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [userName, password, setDisabled])

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    const loginUser = async (e) => {
        e.preventDefault();
        await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userName,
                password
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("id", data.id);
                    localStorage.setItem("role", data.role);
                    localStorage.setItem("experience", data.experience);
                    localStorage.setItem("title", data.title);
                    localStorage.setItem("mastery", data.mastery);
                    localStorage.setItem("learningStreak", data.learningStreak);
                    localStorage.setItem("username", data.username)
                    setToken(data.token);
                    setUserId(data.id);
                    setRole(data.role);
                    setExperience(data.experience);
                    setMastery(data.mastery);
                    setLearningStreak(data.learningStreak);
                    SetTitle(data.title);
                    setUserName(data.username);

                    toast.success("Successfully logged in!");
                    if (data.role === "Admin") {
                        if (isMobileDevice()) {
                            // User is on a mobile device
                            navigate('/deviceIssue');
                        } else {
                            // User is on a desktop device
                            navigate('/admin/creator');
                        }
                    } else {
                        navigate('/dashboard/myLearning');
                    }
                } else {
                    toast.error("User not found!");
                }
            })
    }

    if (role != null) {
        role === "Admin" ?
            navigate('/admin/creator') : navigate('/dashboard/myLearning');
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
                <div disabled={disabled}>
                    <Button purpose='login' text='Login' onClick={loginUser} />
                </div>
                <p className='signupAccount'>If you do not have an account, please <a href="/signup">signup</a> here.</p>
            </Form>
        </div>
    )
}
