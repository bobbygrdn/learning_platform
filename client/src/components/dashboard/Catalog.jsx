import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../store/useTableStore';
import { Card } from 'react-bootstrap';
import useAuthStore from '../../store/useAuthStore';
import Modal from '../admin/creator/Modal';

export default function Catalog() {

    const { searchTerm, setSearchTerm, courses, setCourses, setAction, modalOpen, setModalOpen, setCurrentEntity } = useStore(useTableStore);
    const { token } = useStore(useAuthStore);

    // TODO: Need to change this so it only filters courses that are currently published
    const filteredContent = courses.filter((current) => {
        return current.title.includes(searchTerm);
    });

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

    const handleModalOpen = (id, action) => {
        setAction(action || "");
        if (id !== null) {
            setCurrentEntity(courses.find((current) => current.id === id));
        }
        setModalOpen(!modalOpen)
    }

    return (
        <div className='catalogContainer'>
            <Modal />
            <h1 className='catalogTitle'>Courses</h1>
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
            <div className='coursesList'>
                {filteredContent.map(course => (
                    <Card className='Card courseCard' key={course.id} id={course.id} onClick={() => handleModalOpen(course.id, "view")}>
                        <Card.Title style={{ marginBottom: '.5em' }}>{course.title}</Card.Title>
                        <Card.Text style={{ marginTop: '.5em' }}>Difficulty: {course.difficulty}</Card.Text>
                        <Card.Text style={{ marginTop: '.5em' }}>Time To Complete: {course.timeToComplete}</Card.Text>
                        <Card.Text style={{ marginTop: '.5em' }}>Description: {course.description}</Card.Text>
                    </Card>
                ))}
            </div>
        </div>
    )
}
