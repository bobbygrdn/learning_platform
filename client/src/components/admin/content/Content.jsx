import React, { useEffect } from 'react';
import '../../../styles/admin/Content.css';
import Table from './Table';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import { Button } from 'react-bootstrap';

export default function Content() {
    const { currentTable, searchTerm, setSearchTerm, setQuizzes, setQuestions, setLessons, courses, setCourses, setCurrentContent } = useStore(useTableStore);

    useEffect(() => {
        fetch("/api/v1/courses")
            .then(response => response.json())
            .then(data => {
                setCourses(data);
            })
    }, [setCourses]);
    useEffect(() => {
        fetch("/api/v1/lessons")
            .then(response => response.json())
            .then(data => {
                setLessons(data);
            })
    }, [setLessons]);
    useEffect(() => {
        fetch("/api/v1/quizzes")
            .then(response => response.json())
            .then(data => {
                setQuizzes(data);
            })
    }, [setQuizzes]);
    useEffect(() => {
        fetch("/api/v1/questions")
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
    }, [setQuestions]);

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
