import React from 'react';
import { useStore } from 'zustand';
import useModalStore from '../../../store/useModalStore';

export default function QuizCreationForm() {
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
            <input
                id='createDescription'
                name='description'
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />
        </>
    )
}
