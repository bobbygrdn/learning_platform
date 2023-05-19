import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import CreateContent from './CreateContent';
import EditContent from './EditContent';
import DeleteContent from './DeleteContent';

export default function Modal({ handleModalOpen }) {

    const { modalOpen, action } = useStore(useTableStore);

    const userAction = () => {
        switch (action) {
            case "create":
                return <CreateContent handleModalOpen={handleModalOpen} />
            case "edit":
                return <EditContent handleModalOpen={handleModalOpen} />
            case "delete":
                return <DeleteContent handleModalOpen={handleModalOpen} />
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
