import React, { useEffect, useState } from 'react';
import '../../../styles/admin/content/Content.css';
import Table from './Table';

export default function Content() {
    const [currentTable, setCurrentTable] = useState("Courses");
    // eslint-disable-next-line no-unused-vars
    const [tables, setTables] = useState(["Courses", "Lessons", "Quizzes", "Questions"]);
    const [courses, setCourses] = useState([]);
    const [lessons, setLessons] = useState([]);
    const [quizzes, setQuizzes] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("/api/v1/courses")
            .then(response => response.json())
            .then(data => {
                setCourses(data);
            })
    }, [courses]);
    useEffect(() => {
        fetch("/api/v1/lessons")
            .then(response => response.json())
            .then(data => {
                setLessons(data);
            })
    }, [lessons]);
    useEffect(() => {
        fetch("/api/v1/quizzes")
            .then(response => response.json())
            .then(data => {
                setQuizzes(data);
            })
    }, [quizzes]);
    useEffect(() => {
        fetch("/api/v1/questions")
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
    }, [questions]);

    const selectedTable = (currentTable) => {
        switch (currentTable) {
            case "Lessons":
                return lessons
            case "Quizzes":
                return quizzes
            case "Questions":
                return questions
            default:
                return courses
        }
    }

    return (
        <div className='contentPage'>
            <aside className='sidebar'>
                <h2>Select Content</h2>
                <span className='tables'>
                    {tables.map((table, index) => (
                        <button key={index} className='tablesButton' onClick={() => setCurrentTable(table)}>{table}</button>
                    ))}
                </span>
            </aside>
            <main className='mainContent'>
                <div className='searchBar'>
                    <h3 className='searchTitle'>Search</h3>
                    <input
                        className='searchInput'
                        type='text'
                        placeholder='Search by Title...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <h1 className='contentTitle'>{currentTable}</h1>
                {<Table currentTable={selectedTable(currentTable)} table={currentTable} searchTerm={searchTerm} />}
            </main>
        </div>
    )
}
