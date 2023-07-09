import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import Modal from './Modal';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import useAuthStore from '../../../store/useAuthStore';

export default function Table() {
    const { currentPage, setCurrentPage, setCurrentEntity, currentContent, setCurrentContent, courses, lessons, quizzes, modalOpen, setModalOpen, setAction, searchTerm, currentTable, setCurrentTable } = useStore(useTableStore);

    const { token } = useStore(useAuthStore);

    const filteredContent = currentContent.filter((current) => {
        return current.title.includes(searchTerm);
    });

    const itemsPerPage = 4;
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleModalOpen = (id, action, event) => {
        event.stopPropagation();
        setAction(action || "");
        if (id !== null) {
            setCurrentEntity(currentContent.find((current) => current.id === id));
        }
        setModalOpen(!modalOpen);
    }

    const handleUserSelection = (action, id) => {
        if (action === 'yes') {
            fetch(`/api/v1/${currentTable.toLowerCase()}/${id}`, {
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    toast.success(`${currentContent.find((current) => current.id === id).title} has been deleted`);
                    window.location.reload();
                })
                .catch(error => {
                    toast.error(error.message);
                })
        } else {
            toast.dismiss();
        }
    }

    const handleDelete = (id, event) => {
        event.stopPropagation();
        toast.info(
            <div>
                <p>Are you sure you want to delete {currentContent.find((current) => current.id === id).title}?</p>
                <div className='buttons'>
                    <button className='yes' onClick={() => handleUserSelection('yes', id)}>Yes</button>
                    <button className='no' onClick={() => handleUserSelection('no', id)}>No</button>
                </div>
            </div>,
            {
                autoClose: false,
            }
        )
    }

    const handleCardClick = (id) => {
        setCurrentPage(1);
        switch (currentTable) {
            case "Courses":
                setCurrentTable("Lessons");
                setCurrentContent(courses.find(course => course.id === id).lessons);
                setCurrentEntity(id);
                break;
            case "Lessons":
                setCurrentTable("Quizzes");
                setCurrentContent(lessons.find(lesson => lesson.id === id).quizzes);
                setCurrentEntity(id);
                break;
            case "Quizzes":
                setCurrentTable("Questions");
                setCurrentContent(quizzes.find(quiz => quiz.id === id, quizzes).questions);
                setCurrentEntity(id);
                break;
            default:
        }
    }

    return (
        <div className={`${currentTable}Grid`}>
            <Modal table={currentTable} />
            <div className="grid-container">
                {filteredContent.slice(startIndex, endIndex).map(thisTable => (
                    <Card className='Card' style={{ overflowY: 'auto', maxHeight: '30em' }} key={thisTable.id} id={thisTable.id} onClick={() => handleCardClick(thisTable.id)}>
                        <Card.Body>
                            <Card.Title style={{ marginBottom: '.5em' }}>Title: {thisTable.title}</Card.Title>
                            <Card.Text style={{ marginTop: '.5em' }}>{currentTable === 'Courses' ? `Difficulty: ${thisTable.difficulty}` : ''}</Card.Text>
                            <Card.Text style={{ marginTop: '.5em' }}>{currentTable === 'Courses' ? `Time to Complete: ${thisTable.timeToComplete}` : ''}</Card.Text>
                            <Card.Text style={{ marginTop: '.5em' }}>{currentTable !== 'Questions' ? `Description: ${thisTable.description}` : ''}</Card.Text>
                            <Card.Text style={{ marginTop: '.5em' }}>{(currentTable === 'Questions') ? `Content: ${thisTable.content}` : ''}</Card.Text>
                            <div style={{ marginTop: '.5em' }}>{currentTable === 'Questions' ? <ul style={{ display: 'flex', flexDirection: 'column' }}>Options: {thisTable.options.map(option => <li key={option.id}>- {option.content}</li>)}</ul> : ''}</div>
                            <div style={{ marginTop: '.5em' }}>{currentTable === 'Questions' ? <ul style={{ display: 'flex', flexDirection: 'column' }}>Answer: {thisTable.answers.map(answer => <li key={answer.id}>- {answer.content}</li>)}</ul> : ''}</div>
                        </Card.Body>
                        <div className='buttons'>
                            <Button className='edit' onClick={(event) => handleModalOpen(thisTable.id, "edit", event)}>Edit</Button>
                            <Button className='delete' onClick={(event) => handleDelete(thisTable.id, event)}>Delete</Button>
                        </div>
                    </Card>
                ))}
            </div>
            <div className='createButtons'>
                <div>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button className='pagesButton' key={page} onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    ))}
                </div>
                <Button className='create' onClick={(event) => handleModalOpen(null, "create", event)}>Create</Button>
            </div>
        </div>
    )
}
