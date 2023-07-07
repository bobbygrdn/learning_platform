import React, { useState } from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../../store/useAuthStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import useTableStore from '../../../store/useTableStore';
import Characters from './Characters';
import GenderSelect from './GenderSelect';
import CharacterLore from './CharacterLore';
import FinalizeCharacter from './FinalizeCharacter';

export default function CharacterCreator() {

    const { currentEntity, modalOpen, setModalOpen } = useStore(useTableStore);
    const { userId } = useStore(useCredentialStore);
    const { token } = useStore(useAuthStore);

    const [formSection, setFormSection] = useState(0);

    const formCreation = () => {
        switch (formSection) {
            case 0:
                return <Characters />;
            case 1:
                return <GenderSelect />;
            case 2:
                return <FinalizeCharacter />;
            case 3:
                return <CharacterLore />;
            default:
                break;
        }
    }

    const updateFormSection = (action) => {
        switch (action) {
            case "next":
                setFormSection(formSection + 1);
                break;
            case "prev":
                setFormSection(formSection - 1);
                break;
            default:
                break;
        }
    }

    return (
        <div className='characterCreator'>
            <div className='modalContent'>
                <h2 className='viewContentTitle'>Clan Selection</h2>
                <div className='characterView'>
                    {formCreation()}
                    <div className='characterButtons'>
                        {formSection === 0 ? null : <button className='characterButton' value={"prev"} onClick={(e) => updateFormSection(e.target.value)}>Prev</button>}
                        {formSection === 3 ? null : <button className='characterButton' value={"next"} onClick={(e) => updateFormSection(e.target.value)}>Next</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
