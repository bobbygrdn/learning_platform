import React from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import CreateContent from './CreateContent';
import EditContent from './EditContent';
import ViewContent from '../../dashboard/ViewContent';
import CharacterCreator from '../../dashboard/characterCreator/CharacterCreator';

export default function Modal({ table }) {

    const { modalOpen, action } = useStore(useTableStore);

    const userAction = () => {
        switch (action) {
            case "create":
                return <CreateContent table={table} />
            case "edit":
                return <EditContent table={table} />
            case "view":
                return <ViewContent />
            case "userCreation":
                return <CharacterCreator />
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
