import React from 'react'

export default function EditModal({ editModalOpen, handleEditModal, currentEntity }) {
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
