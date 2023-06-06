import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import useCredentialStore from '../../../store/useCredentialsStore';

export default function EditContent({ table }) {
    const { userId } = useStore(useCredentialStore);
    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore)

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

    return (
        <>
            <div className='editContent'>
                <button className='close' onClick={() => (setModalOpen(!modalOpen))}>Close</button>
                <div className='modalContent'>
                    <span>You are about to edit the following:</span>
                    <span className='highlight'>{currentEntity.title}</span>
                    <span>Are you sure you want to continue?</span>
                </div>
            </div>
        </>

    )
}
