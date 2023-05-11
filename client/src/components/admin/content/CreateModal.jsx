import React, { useEffect, useState } from 'react';

export default function CreateModal({ createModalOpen, handleCreateModal, currentEntity }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        if (sessionStorage.getItem(userId) === "") {
            setUserId(localStorage.getItem("userId"));
        } else {
            setUserId(sessionStorage.getItem("userId"));
        }
    }, [userId])


    const handleSubmit = (e) => {
        fetch(`/api/v1/users/${userId}/courses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "title": title,
                "description": description,
                "user": {
                    "id": userId
                }
            })
        })
            .then(response => response.json())
            .then(data => {
                window.alert(`${title} has been created`);
                window.location.reload();
            })
            .catch(error => {
                window.alert(`${title} could not be created`);
            })
    }

    return (
        <>
            {createModalOpen ?
                <div className='createModalWrapper'>
                    <div className='createModal'>
                        <button className='close' onClick={handleCreateModal}>Close</button>
                        <div className='modalContent'>
                            <h2>Create New {currentEntity || "Course"}</h2>
                            <form className='createModalForm'>
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
                                    rows="10"
                                    cols="80"
                                    style={{ resize: "none" }}
                                />

                            </form>
                            <button className='create submitButton' onClick={handleSubmit}>Create</button>
                        </div>
                    </div>
                </div> : null}
        </>
    )
}
