import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import useModalStore from '../../../store/useModalStore';
import { toast } from 'react-toastify';
import CourseForm from './forms/CourseForm';
import QuestionForm from './forms/QuestionForm';
import LessonForm from './forms/LessonForm';
import QuizForm from './forms/QuizForm';
import useAuthStore from '../../../store/useAuthStore';

export default function CreateContent({ table }) {

    const { userId } = useStore(useCredentialStore);
    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore);
    const { title, setTitle, description, setDescription, content, setContent, difficulty, setDifficulty, timeNeeded, setTimeNeeded, topics, setTopics, options, answers } = useStore(useModalStore);
    const { token } = useStore(useAuthStore);

    useEffect(() => {
        setTitle('');
        setDescription('');
        setContent('');
        setDifficulty('');
        setTimeNeeded('');
        setTopics('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createUrl = () => {
        switch (table) {
            case "Lessons":
                return `courses/${currentEntity}/lessons`;
            case "Quizzes":
                return `lessons/${currentEntity}/quizzes`;
            case "Questions":
                return `quizzes/${currentEntity}/questions`;
            default:
                return `users/${userId}/courses`;
        }
    }

    const createBody = () => {
        switch (table) {
            case "Lessons":
                return {
                    "title": title,
                    "description": description,
                    "content": content,
                    "course": {
                        "id": currentEntity
                    }
                }
            case "Quizzes":
                return {
                    "title": title,
                    "description": description,
                    "lesson": {
                        "id": currentEntity
                    }
                }
            case "Questions":
                return {
                    "title": title,
                    "content": content,
                    "quiz": {
                        "id": currentEntity
                    }
                }
            default:
                return {
                    "title": title,
                    "description": description,
                    "difficulty": difficulty,
                    "timeToComplete": timeNeeded,
                    "topics": topics,
                    "user": {
                        "id": userId
                    }
                }
        }
    }
    const handleSubmit = (e) => {

        const url = createUrl();

        const body = createBody();

        fetch(`https://valor-academy-api.onrender.com/api/v1/${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(data => {
                toast.success(`${title} has been created`)
                if (table === "Questions") {
                    fetch(`/api/v1/questions/${data.id}/options`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        body: JSON.stringify({ content: options })
                    })
                        .then(response => response.json())
                        .then(data => {
                        })
                        .then(fetch(`/api/v1/questions/${data.id}/answers`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": `Bearer ${token}`
                            },
                            body: JSON.stringify({ content: answers })
                        }))
                        .catch(error => {
                            toast.error(`${title} could not be created`);
                        })
                }
                window.location.reload();
            })
            .catch(error => {
                toast.error(`${title} could not be created`);
            })



        setTitle('');
        setDescription('');
        setContent('');
        setDifficulty('');
        setTimeNeeded('');
        setTopics('');
    }

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    }

    const createFormContent = () => {
        switch (table) {
            case "Lessons":
                return <LessonForm />

            case "Questions":
                return <QuestionForm />

            case "Quizzes":
                return <QuizForm />

            default:
                return <CourseForm />
        }
    }

    const createFormTitle = () => {
        switch (table) {
            case "Quizzes":
                return "Quiz"

            case "Lessons":
                return "Lesson"

            case "Questions":
                return "Question"

            default:
                return "Course"
        }
    }

    return (
        <div className='createContent'>
            <button className='close' onClick={handleModalOpen}>Close</button>
            <div className='modalContent'>
                <h2 className="createContentTitle">Create New {createFormTitle()}</h2>
                <form className='createModalForm'>
                    {createFormContent()}
                </form>
                <button className='create submitButton' onClick={handleSubmit}>Create</button>
            </div>
        </div>
    )
}
