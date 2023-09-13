import React from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';
import useCredentialStore from '../../store/useCredentialsStore';
import { toast } from 'react-toastify';

export default function Profile() {

    const { experience, characterAge, title, mastery, token } = useStore(useAuthStore);
    const { userName } = useStore(useCredentialStore);
    const { userId } = useStore(useCredentialStore);

    const closeToast = () => {
        toast.dismiss();
    }

    const getCharacterAge = () => {
        const today = new Date();
        const characterAgeDate = new Date(characterAge)

        const timeDifference = characterAgeDate.getTime() - today.getTime();

        const differenceInDays = Math.ceil(Math.abs(timeDifference) / (1000 * 60 * 60 * 24));

        return differenceInDays;
    }

    const handlePasswordReset = () => {

        const handleReset = async () => {
            toast.dismiss();
            const userInput = document.querySelector("#passwordInput").value;
            console.log(userInput);
            console.log(userId);
            await fetch(`https://valor-academy-api.onrender.com/api/v1/users/${userId}/reset`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    password: userInput,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    toast.success("Password updated successfully!")
                })
                .catch(error => {
                    toast.error(error);
                })
        }

        toast.info(
            <div>
                <h3>Input your new password</h3>
                <div className='userPasswordReset'>
                    <label >New Password:</label>
                    <input type='password' id='passwordInput'></input>
                </div>
                <div className='buttons'>
                    <button className='yes' onClick={handleReset}>Submit</button>
                    <button className='no' onClick={closeToast}>Cancel</button>
                </div>
            </div>,
            {
                autoClose: false,
                closeOnClick: false,
                className: 'passwordReset'
            }
        )
    }

    const handleDeleteAccount = () => {

        const handleDelete = () => {
            toast.dismiss();
            fetch(`https://valor-academy-api.onrender.com/api/v1/users/${userId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
            })
                .then((data) => {
                    localStorage.clear();
                    window.location.href = '/';
                })
                .catch(error => {
                    toast.error(error);
                })
        }

        toast.info(
            <div>
                <p>Are you sure you want to delete your account?</p>
                <div className='buttons'>
                    <button className='yes' onClick={handleDelete}>Delete</button>
                    <button className='no' onClick={closeToast}>Cancel</button>
                </div>
            </div>,
            {
                autoClose: false,
            }
        )
    }

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className='profileContainer'>
            <div className='profileStats'>
                <img src={process.env.PUBLIC_URL + `/resources/${title}.jpg`} id='character' alt='character'></img>
                <div className='stats'>
                    <h2>{userName}</h2>
                    <h3>Title: {title !== undefined ? title.split("_")[1]?.toUpperCase() : ''}</h3>
                    <p><strong>Experience:</strong> {experience}</p>
                    <p><strong>Character Age:</strong> {getCharacterAge()} days</p>
                    <p><strong>Mastery Badges:</strong></p>
                    <ul>{mastery !== "null" ? "" : "NONE"}</ul>
                </div>
            </div>
            <section className='profileSettings'>
                <h2>Badges</h2>
                <ul className='displayCarousel'></ul>
                <h2>Certificates</h2>
                <ul className='displayCarousel'></ul>
                <h2 style={{ marginBottom: '.5em' }}>User Settings</h2>
                <h4>Accessibility:</h4>
                <ul className='accessibilitySettings'>
                    <li>
                        Font Size:
                        <select>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    </li>
                    <li>
                        Contrast:
                        <select>
                            <option>High</option>
                            <option>Low</option>
                        </select>
                    </li>
                    <li>
                        Color Scheme:
                        <select>
                            <option>Light</option>
                            <option>Dark</option>
                        </select>
                    </li>
                </ul>
                <h4>Security:</h4>
                <ul className='securitySettings'>
                    <li>
                        Account Logout:
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                    <li>
                        Password Reset:
                        <button onClick={handlePasswordReset}>Reset Password</button>
                    </li>
                    <li>
                        Delete Account:
                        <button onClick={handleDeleteAccount}>Delete Account</button>
                    </li>
                </ul>
                <h4>Notifications:</h4>
                <ul className='notificationSettings'>
                    <li>
                        New Courses:
                        <input type='radio' name='courses' value="on" id='course-on'></input>
                        <label htmlFor="course-on">On</label>
                        <input type='radio' name='courses' value="off" id='course-off' defaultChecked></input>
                        <label htmlFor="course-off">Off</label>
                    </li>
                    <li>
                        New Lessons:
                        <input type='radio' name='lessons' value="on" id='lesson-on' defaultChecked></input>
                        <label htmlFor="lesson-on">On</label>
                        <input type='radio' name='lessons' value="off" id='lesson-off' defaultChecked></input>
                        <label htmlFor="lesson-off">Off</label>
                    </li>
                    <li>
                        New Quizzes:
                        <input type='radio' name='quizzes' value="on" id='quiz-on'></input>
                        <label htmlFor="quiz-on">On</label>
                        <input type='radio' name='quizzes' value="off" id='quiz-off' defaultChecked></input>
                        <label htmlFor="quiz-off">Off</label>
                    </li>
                    <li>
                        New Badges:
                        <input type='radio' name='badges' value="on" id='badge-on'></input>
                        <label htmlFor="badge-on">On</label>
                        <input type='radio' name='badges' value="off" id='badge-off' defaultChecked></input>
                        <label htmlFor="badge-off">Off</label>
                    </li>
                    <li>
                        Quiz Results:
                        <input type='radio' name='results' value="on" id='result-on'></input>
                        <label htmlFor="result-on">On</label>
                        <input type='radio' name='results' value="off" id='result-off' defaultChecked></input>
                        <label htmlFor="result-off">Off</label>
                    </li>
                    <li>
                        New Certificates:
                        <input type='radio' name='certificates' value="on" id='cert-on'></input>
                        <label htmlFor="cert-on">On</label>
                        <input type='radio' name='certificates' value="off" id='cert-off' defaultChecked></input>
                        <label htmlFor="cert-off">Off</label>
                    </li>
                </ul>

            </section>
        </div>
    )
}
