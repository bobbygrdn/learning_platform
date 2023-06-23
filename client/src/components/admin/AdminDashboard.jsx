import React, { useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminHeader from './AdminHeader';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../styles/admin/AdminDashboard.css';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';
import useTableStore from '../../store/useTableStore';

export default function AdminDashboard() {

    const { role, token } = useStore(useAuthStore);
    const { courses, setCourses, setLessons, setQuizzes, setQuestions, currentTable, setCurrentContent } = useStore(useTableStore);

    const navigate = useNavigate();

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


    useEffect(() => {
        if (role == null || role === "User") {
            navigate('/unauthorized');
        }
    }, [navigate, role])

    return (
        <div className='admin'>
            <AdminHeader />
            <AdminNavbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}
