import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import Modal from './Modal';
import { Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';

export default function Table({ searchTerm, table, setCurrentTable }) {
    const { currentPage, setCurrentPage, currentEntity, setCurrentEntity, currentContent, setcurrentContent, courses, setCourses, lessons, setLessons, quizzes, setQuizzes, questions, setQuestions, modalOpen, setModalOpen, setAction } = useStore(useTableStore);

    useEffect(() => {
        fetch("/api/v1/courses")
            .then(response => response.json())
            .then(data => {
                setCourses(data);
            })
    }, [courses, setCourses]);
    useEffect(() => {
        fetch("/api/v1/lessons")
            .then(response => response.json())
            .then(data => {
                setLessons(data);
            })
    }, [lessons, setLessons]);
    useEffect(() => {
        fetch("/api/v1/quizzes")
            .then(response => response.json())
            .then(data => {
                setQuizzes(data);
            })
    }, [quizzes, setQuizzes]);
    useEffect(() => {
        fetch("/api/v1/questions")
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
    }, [questions, setQuestions]);

    useEffect(() => {
        if (table === "Courses") {
            setcurrentContent(courses);
        }
    }, [table, courses, setcurrentContent]);

    const filteredContent = currentContent.filter((current) => {
        return current.title.includes(searchTerm);
    });

    const itemsPerPage = table === "Questions" ? 3 : 8;
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleModalOpen = (id, action) => {
        setAction(action);
        if (id !== null) {
            setCurrentEntity(currentContent.find((current) => current.id === id));
        }
        setModalOpen(!modalOpen);
    }

    const handleUserSelection = (action, id) => {
        if (action === 'yes') {
            fetch(`/api/v1/${table.toLowerCase()}/${id}`, {
                method: "DELETE"
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

    const handleDelete = (id) => {
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

    const handleCardClick = (event) => {
        // eslint-disable-next-line default-case
        // switch (table) {
        //     case "Courses":
        //         setCurrentTable("Lessons");
        //         setcurrentContent(courses.find(course => course.id === parseInt(event.target.parentElement.id)).lessons);
        //         setCurrentEntity(event.target.parentElement.id);
        //         break;
        //     case "Lessons":
        //         setCurrentTable("Quizzes");
        //         setcurrentContent(lessons.find(lesson => lesson.id === parseInt(event.target.parentElement.id)).quizzes);
        //         setCurrentEntity(event.target.parentElement.id);
        //         break;
        //     case "Quizzes":
        //         setCurrentTable("Questions");
        //         setcurrentContent(quizzes.find(quiz => quiz.id === parseInt(event.target.parentElement.id), quizzes).questions)
        //         setCurrentEntity(event.target.parentElement.id);
        //         break;
        // }
    }

    return (
        <div className={`${table}Grid`}>
            <Modal table={table} handleModalOpen={handleModalOpen} />
            <div className="grid-container">
                {filteredContent.slice(startIndex, endIndex).map(thisTable => (
                    <Card className='Card' key={thisTable.id} id={thisTable.id} onClick={() => handleCardClick(thisTable.id)}>
                        <Card.Body>
                            <Card.Title>{thisTable.title}</Card.Title>
                            <Card.Text>{ }</Card.Text>
                        </Card.Body>
                        <div className='buttons'>
                            <Button className='edit' onClick={() => handleModalOpen(thisTable.id, "edit")}>Edit</Button>
                            <Button className='delete' onClick={() => handleDelete(thisTable.id)}>Delete</Button>
                        </div>
                    </Card>
                ))}
            </div>
            <Button className='create' onClick={() => handleModalOpen(null, "create")}>Create</Button>
        </div>

    )
}
