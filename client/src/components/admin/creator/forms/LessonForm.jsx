import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useModalStore from '../../../../store/useModalStore';
import CodeEditor from '../CodeEditor';
import useTableStore from '../../../../store/useTableStore';

export default function LessonForm() {

    const { title, setTitle, description, setDescription, addContent, content } = useStore(useModalStore);
    const { preview, setPreview } = useStore(useTableStore);

    const handleAddElement = (event) => {
        event.preventDefault();
        addContent(event.target.value);
    }

    useEffect(() => {
        setPreview(content);
    }, [content, setPreview])

    return (
        <div className='lessonCreation'>
            <div className='devTools'>
                <div className='information'>
                    <div className='informationTitle'>
                        <label htmlFor='title'>Title</label>
                        <input
                            id='createTitle'
                            name='title'
                            type='text'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </div>
                    <div className='informationDescription'>
                        <label htmlFor='description'>Description</label>
                        <textarea
                            id='createDescription'
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            rows="2"
                            cols="40"
                            style={{ resize: "none" }}
                        />
                    </div>
                    <div className='toolButtons'>
                        <button value={'<code></code>'} className='toolButton' onClick={(event) => handleAddElement(event)}>Code Block</button>
                        <button value={'<h3></h3>\n'} className='toolButton' onClick={(event) => handleAddElement(event)}>SubTitle</button>
                        <button value={'<p></p>\n'} className='toolButton' onClick={(event) => handleAddElement(event)}>Paragraph</button>
                        <button value={'<h1></h1>\n'} className='toolButton' onClick={(event) => handleAddElement(event)}>Title</button>
                        <button value={'<ul>\n<li></li>\n</ul>\n'} className='toolButton' onClick={(event) => handleAddElement(event)}>List</button>
                        <button value={'<img></img>\n'} className='toolButton' onClick={(event) => handleAddElement(event)}>Image</button>
                    </div>
                </div>

                <label htmlFor='content'>Content</label>
                <CodeEditor language={"html"} />
            </div>
            <div className='preview'>{preview}</div>
        </div>
    )
}
