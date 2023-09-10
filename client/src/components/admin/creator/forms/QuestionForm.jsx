import React, { useEffect } from 'react';
import CodeEditor from '../CodeEditor';
import { useStore } from 'zustand';
import useModalStore from '../../../../store/useModalStore';
import useTableStore from '../../../../store/useTableStore';

export default function QuestionForm() {

    const { title, setTitle, setContent, content, options, setOptions, answers, setAnswers } = useStore(useModalStore);
    const { preview, setPreview } = useStore(useTableStore);

    const handleContentChange = (newContent) => {
        setContent(newContent)
    }

    useEffect(() => {
        setPreview(content);
    }, [content, setPreview])

    return (
        <div className='questionCreation'>
            <div className='devTools'>
                <div className='information'>
                    <div className='questionContent'>
                        <label htmlFor='content'>Content</label>
                        <CodeEditor handleContentChange={handleContentChange} language={"html"} />
                    </div>
                    <div className='questionInputs'>
                        <label htmlFor='title'>Title</label>
                        <input
                            id='createTitle'
                            name='title'
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />

                        <label htmlFor='options'>Options</label>
                        <textarea
                            id='createTitle'
                            name='title'
                            type='text'
                            onChange={(e) => setOptions(e.target.value)}
                            value={options}
                            rows="3"
                            style={{ resize: "none" }}
                        />

                        <label htmlFor='answers'>Answer(s)</label>
                        <textarea
                            id='createTitle'
                            name='title'
                            type='text'
                            onChange={(e) => setAnswers(e.target.value)}
                            value={answers}
                            rows="3"
                            style={{ resize: "none" }}
                        />

                    </div>
                </div>
            </div>
            <div className='preview'>{preview}</div>
        </div>
    )
}
