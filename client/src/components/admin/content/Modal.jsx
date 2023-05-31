import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import CreateContent from './CreateContent';
import EditContent from './EditContent';

export default function Modal({ table, handleModalOpen }) {

    const { modalOpen, action } = useStore(useTableStore);

    const userAction = () => {
        switch (action) {
            case "create":
                return <CreateContent table={table} handleModalOpen={handleModalOpen} />
            case "edit":
                return <EditContent handleModalOpen={handleModalOpen} />
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
