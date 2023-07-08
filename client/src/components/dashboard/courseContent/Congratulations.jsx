import React, { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../../store/useAuthStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import { useNavigate } from 'react-router-dom';

export default function Congratulations() {

    const { completeLesson, token, myCourses, currentCourse } = useStore(useAuthStore);
    const { userId } = useStore(useCredentialStore);
    const [countdown, setCountdown] = useState(10);

    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(countdown => countdown - 1);
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            navigate('/dashboard/myLearning');
            window.location.reload();
        }
    }, [countdown, navigate]);

    useEffect(() => {
        fetch(`/api/v1/users/${userId}/completeLesson/${completeLesson}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: currentCourse
        })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => {
                console.log(error);
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='congratulationsContainer'>
            <h1>Congratulations!!</h1>
            <p>You have successfully completed the <strong>{myCourses.find(course => course.id === parseInt(currentCourse))?.title}</strong> course!</p>
            <p>You will be redirected to the <strong>My Learning Page </strong>in <strong className='counter'>{countdown}</strong> seconds.</p>
        </div>
    )
}
