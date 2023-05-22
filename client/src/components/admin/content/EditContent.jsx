import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';

export default function EditContent({ handleModalOpen, table }) {
    const { currentEntity } = useStore(useTableStore)

    return (
        <>
            <div className='editContent'>
                <button className='close' onClick={handleModalOpen}>Close</button>
                <div className='modalContent'>
                    <span>You are about to edit the following:</span>
                    <span className='highlight'>{currentEntity.title}</span>
                    <span>Are you sure you want to continue?</span>
                </div>
            </div>
        </>

    )
}
