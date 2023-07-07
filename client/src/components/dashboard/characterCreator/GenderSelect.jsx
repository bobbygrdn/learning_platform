import React from 'react'
import { useStore } from 'zustand'
import useWarriorStore from '../../../store/useWarriorStore'

export default function GenderSelect() {

    const { genderSelection, characterSelection, setGenderSelection } = useStore(useWarriorStore);

    const handleGenderSelection = (e) => {
        setGenderSelection(e.target.id)
    }

    return (
        <div className='character-container'>
            <div id='male' className={`characterCard ${genderSelection === 'male' ? 'selected' : ""}`} onClick={handleGenderSelection}>
                <img className='warrior' src={`/resources/male${characterSelection}.jpg`} alt='male'></img>
            </div>
            <div id='female' className={`characterCard ${genderSelection === 'female' ? 'selected' : ""}`} onClick={handleGenderSelection}>
                <img className='warrior' src={`/resources/female${characterSelection}.jpg`} alt='female'></img>
            </div>
        </div>
    )
}
