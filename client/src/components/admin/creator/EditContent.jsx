import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import useModalStore from '../../../store/useModalStore';
import useAuthStore from '../../../store/useAuthStore';
import { toast } from 'react-toastify';
import CourseForm from './forms/CourseForm';
import QuestionForm from './forms/QuestionForm';
import LessonForm from './forms/LessonForm';
import QuizForm from './forms/QuizForm';

export default function EditContent({ table }) {
    const { userId } = useStore(useCredentialStore);
    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore)
    const { title, setTitle, description, setDescription, content, setContent, difficulty, setDifficulty, timeNeeded, setTimeNeeded, topics, setTopics, setOptions, setAnswers } = useStore(useModalStore);
    const { token } = useStore(useAuthStore);

    useEffect(() => {
        setTitle(currentEntity.title);
        setDescription(currentEntity.description);
        setContent(currentEntity.content);
        setDifficulty(currentEntity.difficulty);
        setTimeNeeded(currentEntity.timeToComplete);
        setTopics(currentEntity.topics);
        setOptions(JSON.stringify(currentEntity.options));
        setAnswers(JSON.stringify(currentEntity.answers));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const createUrl = () => {
        switch (table) {
            case "Lessons":
                return `lessons/${currentEntity.id}`;
            case "Quizzes":
                return `quizzes/${currentEntity.id}`;
            case "Questions":
                return `questions/${currentEntity.id}`;
            default:
                return `courses/${currentEntity.id}`;
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

        fetch(`/api/v1/${url}`, {
            method: "PUT",
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

        if (table === "Questions") {

            fetch(`/api/v1/${url}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(data => {
                })
                .catch(error => {
                    toast.error(`${title} could not be created`);
                })

            fetch(`/api/v1/${url}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(data => {
                })
                .catch(error => {
                    toast.error(`${title} could not be created`);
                })
        }

        setTitle('');
        setDescription('');
        setContent('');
        setDifficulty('');
        setTimeNeeded('');
        setTopics('');
        setOptions('');
        setAnswers('');
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
        <>
            <div className='editContent'>
                <button className='close' onClick={() => (setModalOpen(!modalOpen))}>Close</button>
                <div className='modalContent'>
                    <h2 className='createContentTitle'>Edit {createFormTitle()}</h2>
                    <form className='createModalForm'>
                        {createFormContent()}
                    </form>
                    <button className='create submitButton' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>

    )
}
