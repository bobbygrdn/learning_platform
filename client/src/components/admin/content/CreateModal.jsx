import React from 'react'

export default function CreateModal({ createModalOpen, handleCreateModal, currentEntity }) {
    return (
        <>
            {createModalOpen ?
                <div className='createModalWrapper'>
                    <p>Create</p>
                    <button onClick={handleCreateModal}>Close</button>
                </div> : null}
        </>
    )
}
