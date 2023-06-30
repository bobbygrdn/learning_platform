import React from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';
import useCredentialStore from '../../store/useCredentialsStore';

export default function Profile() {

    const { experience, learningStreak, title, mastery } = useStore(useAuthStore);
    const { userName } = useStore(useCredentialStore);
    // TODO: Add all the images htmlFor the different characters and character stories
    // TODO: Replace images with proper images coming from the user data

    const handlePasswordReset = () => {

    }

    const handleDeleteAccount = () => {

    }

    return (
        <div className='profileContainer'>
            <div className='profileStats'>
                <img src={process.env.PUBLIC_URL + "/resources/male_meijin.jpg"} id='character' alt='character'></img>
                <div className='stats'>
                    <h2>{userName}</h2>
                    <div className='currency'>
                        <p>{0}</p>
                        <img src={process.env.PUBLIC_URL + "/resources/male_meijin.jpg"} id='currencyImage' alt='currency'></img>
                    </div>
                    <h3>Title: {title}</h3>
                    <p><strong>Experience:</strong> {experience}</p>
                    <p><strong>Age of Character:</strong> {0} days</p>
                    <p><strong>Learning Streak:</strong> {learningStreak < new Date() ? null : 0} days</p>
                    <p><strong>Mastery Badges:</strong></p>
                    <ul></ul>
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
