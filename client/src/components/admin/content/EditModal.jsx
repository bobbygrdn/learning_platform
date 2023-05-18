import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';

export default function EditModal({ editModalOpen, handleEditModal }) {
    const { currentEntity } = useStore(useTableStore)

    return (
        <>
            {editModalOpen ?
                <div className='editModalWrapper'>
                    <p>Edit</p>
                    <button onClick={handleEditModal}>Close</button>
                </div> : null}
        </>

    )
}
