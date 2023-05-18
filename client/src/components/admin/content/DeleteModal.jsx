import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';

export default function DeleteModal({ deleteModalOpen, handleDeleteModal, table }) {
    const { currentEntity } = useStore(useTableStore);
    const deleteEntity = () => {

        fetch(`/api/v1/${table.toLowerCase()}/${currentEntity.id}`, {
            method: "DELETE"
        })
            .then(response => {
                window.alert(`${currentEntity.title} has been deleted`);
            })
            .then(() => {
                handleDeleteModal();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            {deleteModalOpen ?
                <div className='deleteModalWrapper'>
                    <div className='deleteModal'>
                        <button className='close' onClick={handleDeleteModal}>Close</button>
                        <div className='modalContent'>
                            <span>You are about to delete the following entity:</span>
                            <span className='highlight'>{currentEntity.title}</span>
                            <span>Are you sure you want to continue?</span>
                        </div>
                        <div className='buttons'>
                            <button className='yes' onClick={deleteEntity}>Yes</button>
                            <button className='no' onClick={handleDeleteModal}>No</button>
                        </div>
                    </div>
                </div> : null}
        </>
    )
}
