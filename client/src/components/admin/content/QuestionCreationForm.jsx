import React from 'react';
import CodeEditor from './CodeEditor';
import { useStore } from 'zustand';
import useModalStore from '../../../store/useModalStore';

export default function QuestionCreationForm() {

    const { title, setTitle, setContent } = useStore(useModalStore);

    const handleContentChange = (newContent) => {
        setContent(newContent)
    }

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

            <label htmlFor='content'>Content</label>
            <CodeEditor handleContentChange={handleContentChange} language={"html"} />
        </>
    )
}
