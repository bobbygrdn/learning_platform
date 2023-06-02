import React from 'react';
import { useStore } from 'zustand';
import CodeEditor from './CodeEditor';
import useTableStore from '../../../store/useTableStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import useModalStore from '../../../store/useModalStore';
import { toast } from 'react-toastify';

export default function CreateContent({ table }) {

    const { userId } = useStore(useCredentialStore);
    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore);
    const { title, setTitle, description, setDescription, content, setContent, difficulty, setDifficulty, timeNeeded, setTimeNeeded, topics, setTopics } = useStore(useModalStore);

    const createUrl = () => {
        switch (table) {
            case "Lessons":
                return `courses/${currentEntity.id}/lessons`;
            case "Quizzes":
                return `lessons/${currentEntity.id}/quizzes`;
            case "Questions":
                return `quizzes/${currentEntity.id}/questions`;
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
                        "id": currentEntity.id
                    }
                }
            case "Quizzes":
                return {
                    "title": title,
                    "description": description,
                    "lesson": {
                        "id": currentEntity.id
                    }
                }
            case "Questions":
                return {
                    "title": title,
                    "content": content,
                    "quiz": {
                        "id": currentEntity.id
                    }
                }
            default:
                return {
                    "title": title,
                    "description": description,
                    "difficulty": difficulty,
                    "time_needed": timeNeeded,
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
                "Content-Type": "application/json"
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

    const handleContentChange = (newContent) => {
        setContent(newContent)
    }

    const createFormContent = () => {
        switch (table) {

            case "Lessons":
                return <>
                    <label htmlFor='title'>Title</label>
                    <input
                        id='createTitle'
                        name='title'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        rows="5"
                        cols="80"
                        style={{ resize: "none" }}
                    />

                    <label htmlFor='content'>Content</label>
                    <CodeEditor handleContentChange={handleContentChange} language={"html"} />
                </>

            case "Questions":
                return <>
                    <label htmlFor='title'>Title</label>
                    <input
                        id='createTitle'
                        name='title'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <label htmlFor='content'>Content</label>
                    <CodeEditor handleContentChange={handleContentChange} language={"html"} />
                </>

            default:
                return <>
                    <label htmlFor='title'>Title</label>
                    <input
                        id='createTitle'
                        className='createInput'
                        name='title'
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <label htmlFor='difficulty'>Select Difficulty:</label>
                    <select
                        id="difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>

                    <label htmlFor='timeNeeded'>Time Needed</label>
                    <input
                        id='timeNeeded'
                        className='createInput'
                        name="timeNeeded"
                        type='text'
                        onChange={(e) => setTimeNeeded(e.target.value)}
                        value={timeNeeded}
                    />

                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        rows="5"
                        cols="30"
                        style={{ resize: "none" }}
                    />

                    <label htmlFor='topics'>Topics</label>
                    <textarea
                        id='topics'
                        name="topics"
                        onChange={(e) => setTopics(e.target.value)}
                        value={topics}
                        rows="5"
                        cols="30"
                        style={{ resize: "none" }}
                    />
                </>
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
