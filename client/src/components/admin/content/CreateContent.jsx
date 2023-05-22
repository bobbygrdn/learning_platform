import React from 'react';
import { useStore } from 'zustand';
import CodeEditor from './CodeEditor';
import useTableStore from '../../../store/useTableStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import useModalStore from '../../../store/useModalStore';

export default function CreateContent({ table }) {

    const { userId } = useStore(useCredentialStore);
    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore);
    const { title, setTitle, description, setDescription, content, setContent } = useStore(useModalStore);

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

        // fetch(`/api/v1/${url}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(body)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         window.alert(`${title} has been created`);
        //         window.location.reload();
        //     })
        //     .catch(error => {
        //         window.alert(`${title} could not be created`);
        //     })
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
                        rows="20"
                        cols="80"
                        style={{ resize: "none" }}
                    />
                </>
        }
    }

    return (
        <>
            <div className='createContent'>
                <button className='close' onClick={handleModalOpen}>Close</button>
                <div className='modalContent'>
                    <h2>Create New {table.slice(0, -1)}</h2>
                    <form className='createModalForm'>
                        {createFormContent()}
                    </form>
                    <button className='create submitButton' onClick={handleSubmit}>Create</button>
                </div>
            </div>
        </>
    )
}
