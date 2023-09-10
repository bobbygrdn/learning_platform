import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../landingPage/Button';
import RegistrationsClosed from './RegistrationsClosed';
import '../../styles/authentication/Signup.css';
import Header from '../landingPage/Header';
import { toast } from 'react-toastify';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';

export default function Signup() {

    const { allowRegistration } = useStore(useAuthStore);

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    // eslint-disable-next-line no-unused-vars
    const [formErrors, setFormErrors] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [userTouched, setUserTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

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
            fetch('/api/v1/signup', {
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
                    toast.success("Signup successful!");
                    navigate('/login');
                })
                .catch((error) => {
                    toast.error("Signup unsuccessful, please try again.");
                })
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleBlur = (input) => {
        switch (input) {
            case "username":
                setUserTouched(true);
                break;
            case "password":
                setPasswordTouched(true);
                break;
            case "confirmPassword":
                setConfirmPasswordTouched(true);
                break;
            case "email":
                setEmailTouched(true);
                break;
            default:
        }

    }

    const { errors, isValid } = validateForm();

    return (
        <>
            {
                allowRegistration ?
                    <div className='signup-wrapper'>
                        <Header />
                        <form className='signup-form' onSubmit={handleSubmit} noValidate>
                            <h1 className='signupTitle'>Signup</h1>
                            <label className='signupUsername'>
                                <p className='signupUserTitle'>Username</p>
                                <input className='signupUserInput' type='text' name='username' value={formValues.username} onChange={handleInputChange} onBlur={() => handleBlur("username")} required />
                                {userTouched && (errors.username || !isValid) && <p className='signupError'>{errors.username}</p>}
                            </label>
                            <label className='signupEmail'>
                                <p className='signupEmailTitle'>Email</p>
                                <input className='signupEmailInput' type='email' name='email' value={formValues.email} onChange={handleInputChange} onBlur={() => handleBlur("email")} required />
                                {emailTouched && (errors.email || !isValid) && <p className='signupError'>{errors.email}</p>}
                            </label>
                            <label className='signupPassword'>
                                <p className='signupPasswordTitle'>Password</p>
                                <input className='signupPasswordInput' type='password' name='password' value={formValues.password} onChange={handleInputChange} onBlur={() => handleBlur("password")} required />
                                {passwordTouched && (errors.password || !isValid) && <p className='signupError'>{errors.password}</p>}
                            </label>
                            <label className='signupConfirmPassword'>
                                <p className='signupConfirmPasswordTitle'>Confirm Password</p>
                                <input className='signupConfirmPasswordInput' type='password' name='confirmPassword' value={formValues.confirmPassword} onChange={handleInputChange} onBlur={() => handleBlur("confirmPassword")} required />
                                {confirmPasswordTouched && (errors.confirmPassword || !isValid) && <p className='signupError'>{errors.confirmPassword}</p>}
                            </label>
                            <Button purpose='signup' text='Signup' type='submit' disabled={!isValid} />
                            <span className='signupAlready'>Already have an account?<a href='/login'> Click here</a></span>
                        </form>
                    </div> : <RegistrationsClosed />}
        </>
    );
}