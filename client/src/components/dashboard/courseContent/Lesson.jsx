import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Lesson() {

    const { currentCourse, myCourses } = useStore(useAuthStore);

    const navigate = useNavigate();

    const currentLesson = (currentCourse !== null && myCourses !== null && myCourses.length > 0) ? myCourses.find(course => course.id === currentCourse)?.lessons.find(lesson => lesson.userFinished === false) : '';

    useEffect(() => {
        if (currentLesson === undefined) {
            navigate('/dashboard/myLearning')
        }
    }, [currentLesson, navigate])

    const handleCompleteLesson = () => {
        localStorage.setItem('completeLesson', currentLesson.id)
        navigate('/dashboard/myLearning/quiz')
    }

    return (
        <div className='currentLessonContainer'>
            {currentLesson !== undefined ? (
                <>
                    <h2>{currentLesson && currentLesson.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: `${currentLesson && currentLesson.content}` }}>
                    </div>
                    {currentLesson && <button className='currentLessonButton' onClick={handleCompleteLesson}>Take Quiz</button>}
                </>
            ) : ''}
        </div>
    )
}
