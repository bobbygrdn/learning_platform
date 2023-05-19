import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import { toast } from 'react-toastify';

export default function DeleteContent({ table, handleModalOpen }) {
    const { currentEntity } = useStore(useTableStore);
    const deleteEntity = () => {

        fetch(`/api/v1/${table.toLowerCase()}/${currentEntity.id}`, {
            method: "DELETE"
        })
            .then(response => {
                toast.success(`${currentEntity.title} has been deleted`);
            })
            .then(() => {
                handleModalOpen();
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <>
            <div className='deleteContent'>
                <button className='close' onClick={handleModalOpen}>Close</button>
                <div className='modalContent'>
                    <span>You are about to delete the following:</span>
                    <span className='highlight'>{currentEntity.title}</span>
                    <span>Are you sure you want to continue?</span>
                </div>
                <div className='buttons'>
                    <button className='yes' onClick={deleteEntity}>Yes</button>
                    <button className='no' onClick={handleModalOpen}>No</button>
                </div>
            </div>
        </>
    )
}
