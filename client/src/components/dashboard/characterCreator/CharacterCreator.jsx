import React, { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../../store/useAuthStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import Characters from './Characters';
import GenderSelect from './GenderSelect';
import CharacterLore from './CharacterLore';
import FinalizeCharacter from './FinalizeCharacter';
import useWarriorStore from '../../../store/useWarriorStore';
import { toast } from 'react-toastify';

export default function CharacterCreator() {

    const { userId } = useStore(useCredentialStore);
    const { token, setTitle } = useStore(useAuthStore);
    const { genderSelection, characterSelection, setWarriorLore, warriorLore, setChosenWarrior } = useStore(useWarriorStore);

    const [formSection, setFormSection] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/dummyData/warriorLore.json');
            const data = await response.json();
            setWarriorLore(data);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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

    const updateFormSection = (e) => {
        switch (e.target.value) {
            case "next":
                setFormSection(formSection + 1);
                break;
            case "prev":
                setFormSection(formSection - 1);
                break;
            case "submit":
                setFormSection(formSection + 1);
                handleWarriorSelection();
                break;
            default:
                break;
        }
    }

    const handleWarriorSelection = async () => {
        await fetch(`/api/v1/users/${userId}/warriorSelect`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: genderSelection + characterSelection,
            })
            .then((response) => response.json())
            .then(data => {
                toast.success("You have successfully chosen your warrior!");
                setTitle(genderSelection + characterSelection);
                localStorage.setItem("title", genderSelection + characterSelection);
            })
            .catch(error => {
                toast.error("Your warrior could not be chosen!");
            })

        switch (characterSelection) {
            case "_muda":
                setChosenWarrior(warriorLore[1])
                break;
            case "_thrall":
                setChosenWarrior(warriorLore[0])
                break;
            case "_recruit":
                setChosenWarrior(warriorLore[3])
                break;
            case "_initiate":
                setChosenWarrior(warriorLore[2])
                break;
            default:
                break;
        }
    }

    return (
        <div className='characterCreator'>
            <div className='modalContent'>
                <h2 className='viewContentTitle'>{formSection === 3 ? "Warrior Backstory" : "Clan Selection"}</h2>
                <div className='characterView'>
                    {formCreation()}
                    <div className='characterButtons'>
                        {(formSection === 0 || formSection > 2) ? null : <button className='characterButton' value={"prev"} onClick={updateFormSection}>Prev</button>}
                        {formSection === 3 ? null : <button className='characterButton' value={formSection === 2 ? "submit" : "next"} onClick={updateFormSection}>{formSection === 2 ? "Submit" : "Next"}</button>}
                    </div>
                </div>
            </div>
        </div>
    )
}
