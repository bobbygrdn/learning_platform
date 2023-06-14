import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import useModalStore from '../../../store/useModalStore';
import { toast } from 'react-toastify';
import CourseCreationForm from './CourseCreationForm';
import QuestionCreationForm from './QuestionCreationForm';
import LessonCreationForm from './LessonCreationForm';
import QuizCreationForm from './QuizCreationForm';
import useAuthStore from '../../../store/useAuthStore';

export default function CreateContent({ table }) {

    const { userId } = useStore(useCredentialStore);
    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore);
    const { title, description, content, difficulty, timeNeeded, topics } = useStore(useModalStore);
    const { token } = useStore(useAuthStore);

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
        console.log(url);

        const body = createBody();
        console.log(body);

        fetch(`/api/v1/${url}`, {
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
                window.location.reload();
            })
            .catch(error => {
                toast.error(`${title} could not be created`);
            })
    }

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    }

    const createFormContent = () => {
        switch (table) {
            case "Lessons":
                return <LessonCreationForm />

            case "Questions":
                return <QuestionCreationForm />

            case "Quizzes":
                return <QuizCreationForm />

            default:
                return <CourseCreationForm />
        }
    }

    return (
        <div className='createContent'>
            <button className='close' onClick={handleModalOpen}>Close</button>
            <div className='modalContent'>
                <h2 className="createContentTitle">Create New {table.slice(0, -1)}</h2>
                <form className='createModalForm'>
                    {createFormContent()}
                </form>
                <button className='create submitButton' onClick={handleSubmit}>Create</button>
            </div>
        </div>
    )
}
