import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useStore } from 'zustand';
import useAuthStore from '../../../store/useAuthStore';
import useCredentialStore from '../../../store/useCredentialsStore';
import useWarriorStore from '../../../store/useWarriorStore';

export default function FinalizeCharacter() {

    const { token } = useStore(useAuthStore);
    const { userId } = useStore(useCredentialStore);
    const { genderSelection, characterSelection } = useStore(useWarriorStore);

    const handleCloseToast = () => {
        toast.dismiss()
    }

    const finalizeCharacterSelection = () => {
        toast.info(
            <div>
                <h3>Is this the warrior you want to choose?</h3>
                <div className='buttons'>
                    <button className='yes' onClick={handleWarriorSelection}>Submit</button>
                    <button className='no' onClick={handleCloseToast}>Cancel</button>
                </div>
            </div>,
            {
                autoClose: false,
                closeOnClick: false,
            }
        )
    }

    const handleWarriorSelection = () => {
        handleCloseToast();
        fetch(`/api/v1/users/${userId}/warriorSelect`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    title: genderSelection + characterSelection
                }),
            })
            .then((response) => response.json())
            .then(data => {
                toast.success("You have successfully chosen your warrior!");
            })
            .catch(error => {
                toast.error("Your warrior could not be chosen!");
            })
    }

    useEffect(() => {
        finalizeCharacterSelection();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='character-container'>
            <div id='male' className='characterCard selected'>
                <img className='warrior' src={`/resources/${genderSelection}${characterSelection}.jpg`} alt='warrior'></img>
            </div>
        </div>
    )
}
