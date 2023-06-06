import React from 'react';
import { useStore } from 'zustand';
import useModalStore from '../../../store/useModalStore';
export default function CourseCreationForm() {
    const { title, setTitle, description, setDescription, difficulty, setDifficulty, timeNeeded, setTimeNeeded, topics, setTopics } = useStore(useModalStore);
    return (
        <>
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
    )
}
