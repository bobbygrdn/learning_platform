import React from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {

    const { myCourses, currentCourse, completeLesson } = useStore(useAuthStore);

    const navigate = useNavigate();

    const currentQuiz = (myCourses !== undefined && currentCourse !== undefined && completeLesson !== undefined) ? myCourses?.find(course => course.id === parseInt(currentCourse))?.lessons.find(lesson => lesson.id === parseInt(completeLesson))?.quizzes[0] : '';

    const handleStartQuiz = () => {
        navigate("/dashboard/myLearning/questions");
    }

    return (
        <div className='currentQuizContainer'>
            <h1 style={{ textAlign: 'center', marginBottom: '1em' }}>Quiz Time!</h1>
            {currentQuiz !== undefined ? (
                <>
                    <h2 style={{ textAlign: 'center', marginBottom: '1em' }}>{currentQuiz && currentQuiz.title}</h2>
                    <h3 style={{ textAlign: 'center', marginBottom: '1em' }}>{currentQuiz && currentQuiz.description}</h3>
                    <h4 style={{ textAlign: 'center', marginBottom: '1em' }}>{currentQuiz &&
                        <span>This quiz has a total of <strong style={{ color: '#000', fontSize: '1.5em' }}>{currentQuiz.questions.length}</strong> questions.</span>
                    }</h4>
                </>
            ) : ""}
            <div className="currentQuizButtons">
                <button className="currentQuizButton" onClick={handleStartQuiz}>Start Quiz</button>
            </div>
        </div>
    )
}
