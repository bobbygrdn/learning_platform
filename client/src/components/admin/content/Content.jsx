import React, { useEffect } from 'react';
import '../../../styles/admin/Content.css';
import Table from './Table';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import { Button } from 'react-bootstrap';
import useAuthStore from '../../../store/useAuthStore';

export default function Content() {
    const { currentTable, searchTerm, setSearchTerm, setQuizzes, setQuestions, setLessons, courses, setCourses, setCurrentContent } = useStore(useTableStore);
    const { token } = useStore(useAuthStore);

    useEffect(() => {
        fetch("/api/v1/courses", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setCourses(data);
            })
    }, [setCourses, token]);
    useEffect(() => {
        fetch("/api/v1/lessons", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setLessons(data);
            })
    }, [setLessons, token]);
    useEffect(() => {
        fetch("/api/v1/quizzes", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setQuizzes(data);
            })
    }, [setQuizzes, token]);
    useEffect(() => {
        fetch("/api/v1/questions", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
    }, [setQuestions, token]);

    useEffect(() => {
        if (currentTable === 'Courses') {
            setCurrentContent(courses);
        }
    }, [courses, currentTable, setCurrentContent]);

    const handleBack = () => {
        window.location.reload();
    }

    return (
        <main className='mainContent'>
            <h1 className='contentTitle'>{currentTable}</h1>
            <div className='searchBar'>
                <h3 className='searchTitle'>Search</h3>
                <input
                    className='searchInput'
                    type='text'
                    placeholder='Search by Title...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {currentTable !== 'Courses' && <Button className='back' onClick={handleBack}>Back</Button>}
            </div>
            <Table />
        </main>
    )
}
