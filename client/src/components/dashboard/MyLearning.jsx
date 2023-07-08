import React from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';
import { Card } from 'react-bootstrap';
import '../../styles/dashboard/MyLearning.css';
import ProgressBar from './courseContent/ProgressBar';
import { useNavigate } from 'react-router-dom'

export default function MyLearning() {

    const { myCourses, setCurrentCourse } = useStore(useAuthStore);

    const navigate = useNavigate();

    const handleStartCourse = (e) => {
        setCurrentCourse(parseInt(e.target.id));
        localStorage.setItem("currentCourse", parseInt(e.target.id))
        navigate('/dashboard/myLearning/lesson');
    }

    return (
        <div className='myCoursesContainer'>
            <div className='myCourses'>
                {myCourses.length > 0 ? (
                    myCourses.map(course => (
                        <Card className='Card courseCard' key={course.id} style={{ width: '18rem' }}>
                            <Card.Title style={{ marginBottom: '.5em' }}>{course.title}</Card.Title>
                            <Card.Text style={{ marginTop: '.5em' }}>Difficulty: {course.difficulty}</Card.Text>
                            <Card.Text style={{ marginTop: '.5em' }}>Time To Complete: {course.timeToComplete}</Card.Text>
                            <Card.Text style={{ marginTop: '.5em' }}>Description: {course.description}</Card.Text>
                            <div className='progress-bar'>
                                <p style={{ marginTop: '1em' }}>Progress:</p>
                                <ProgressBar width={10} height={1.5} outerColor={'transparent'} innerColor={'rgb(51, 66, 80)'} progress={course.lessons.filter(lesson => lesson.userFinished).length * 10} borderColor={'var(--secondary-text)'} />
                            </div>
                            <button id={course.id} className='myCoursesButton' onClick={handleStartCourse}>{course.lessons.filter(lesson => lesson.userFinished).length === 0 ? "Start Course" : "Continue Course"}</button>
                        </Card>
                    ))
                ) : (
                    <h1>You have not enrolled in any courses. Check out the catalog page to get started!</h1>
                )}
            </div>
        </div>
    )
}
