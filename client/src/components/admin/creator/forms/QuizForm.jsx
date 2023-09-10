import React from 'react';
import { useStore } from 'zustand';
import useModalStore from '../../../../store/useModalStore';

export default function QuizForm() {
    const { title, setTitle, description, setDescription } = useStore(useModalStore);

    return (
        <>
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
                cols="30"
                style={{ resize: "none" }}
            />
        </>
    )
}
