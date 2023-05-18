import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import CreateModal from './CreateModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

export default function Modal({ handleModalOpen }) {

    const { modalOpen, action } = useStore(useTableStore);

    const userAction = () => {
        switch (action) {
            case "create":
                return <CreateModal handleModalOpen={handleModalOpen} />
            case "edit":
                return <EditModal handleModalOpen={handleModalOpen} />
            case "delete":
                return <DeleteModal handleModalOpen={handleModalOpen} />
            default:
                return <h1>Error</h1>;
        }
    }

    return (
        <>
            {modalOpen ?
                <div className='modalWrapper'>
                    {userAction()}
                </div > : null
            }
        </>
    )
}
