import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../landingPage/Button';
import '../../styles/authentication/Signup.css';
import Header from '../landingPage/Header';

export default function Signup() {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const validateForm = useCallback(() => {
        let errors = {};
        let isValid = true;

        // Validate username
        if (!formValues.username) {
            errors.username = 'Username is required';
            isValid = false;
        }

        // Validate email
        if (!formValues.email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        // Validate password
        if (!formValues.password) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formValues.password)) {
            errors.password = 'Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.';
            isValid = false;
        }

        // Validate confirm password
        if (!formValues.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
            isValid = false;
        } else if (formValues.password !== formValues.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        return { errors, isValid };
    }, [formValues]);

    useEffect(() => {
        setFormErrors(validateForm().errors);
    }, [formValues, validateForm]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const { isValid } = validateForm();
        if (isValid) {
            fetch('/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formValues.username,
                    password: formValues.password,
                    email: formValues.email,
                    role: 'User',
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    window.alert('Signup successful!');
                    navigate('/login');
                });
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const { errors, isValid } = validateForm();

    return (
        <div className='signup-wrapper'>
            <Header />
            <form className='signup-form' onSubmit={handleSubmit} noValidate>
                <h1 className='signupTitle'>Signup</h1>
                <label className='signupUsername'>
                    <p className='signupUserTitle'>Username</p>
                    <input className='signupUserInput' type='text' name='username' value={formValues.username} onChange={handleInputChange} required />
                    {errors.username && <p className='signupError'>{errors.username}</p>}
                </label>
                <label className='signupEmail'>
                    <p className='signupEmailTitle'>Email</p>
                    <input className='signupEmailInput' type='email' name='email' value={formValues.email} onChange={handleInputChange} required />
                    {errors.email && <p className='signupError'>{errors.email}</p>}
                </label>
                <label className='signupPassword'>
                    <p className='signupPasswordTitle'>Password</p>
                    <input className='signupPasswordInput' type='password' name='password' value={formValues.password} onChange={handleInputChange} required />
                    {errors.password && <p className='signupError'>{errors.password}</p>}
                </label>
                <label className='signupConfirmPassword'>
                    <p className='signupConfirmPasswordTitle'>Confirm Password</p>
                    <input className='signupConfirmPasswordInput' type='password' name='confirmPassword' value={formValues.confirmPassword} onChange={handleInputChange} required />
                    {errors.confirmPassword && <p className='signupError'>{errors.confirmPassword}</p>}
                </label>
                <div>
                    <Button purpose='signup' text='Signup' type='submit' disabled={!isValid} />
                </div>
            </form>
        </div>
    );
}