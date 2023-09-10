import React from 'react';
import { useStore } from 'zustand';
import useWarriorStore from '../../../store/useWarriorStore';

export default function FinalizeCharacter() {

    const { genderSelection, characterSelection } = useStore(useWarriorStore);

    return (
        <div className='character-container'>
            <div id='male' className='characterCard selected finalizeCharacter'>
                <img className='warrior' src={`/resources/${genderSelection}${characterSelection}.jpg`} alt='warrior'></img>
                <h3 className='finalizeText'>Is this the warrior you would like to select?</h3>
            </div>
        </div>
    )
}
