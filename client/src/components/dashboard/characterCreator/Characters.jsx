import React from 'react'
import { useStore } from 'zustand';
import useWarriorStore from '../../../store/useWarriorStore';

export default function Characters() {

    const { characterSelection, setCharacterSelection } = useStore(useWarriorStore);

    const handleSelection = (e) => {

        switch (e.target.id) {
            case "samurai":
                setCharacterSelection("_muda");
                break;
            case "viking":
                setCharacterSelection("_thrall")
                break;
            case "legionnaire":
                setCharacterSelection("_recruit")
                break;
            case "spartan":
                setCharacterSelection("_initiate")
                break;
            default:
                break;
        }
    }

    return (
        <div className='character-container'>
            <div id='samurai' className={`characterCard ${characterSelection === '_muda' ? 'selected' : ""}`} onClick={handleSelection}>
                <img className='warrior' src='/resources/male_muda.jpg' alt='Samurai'></img>
            </div>
            <div id='viking' className={`characterCard ${characterSelection === '_thrall' ? 'selected' : ""}`} onClick={handleSelection}>
                <img className='warrior' src='/resources/female_thrall.jpg' alt='Viking'></img>
            </div>
            <div id='legionnaire' className={`characterCard ${characterSelection === '_recruit' ? 'selected' : ""}`} onClick={handleSelection}>
                <img className='warrior' src='/resources/male_recruit.jpg' alt='Legionnaire'></img>
            </div>
            <div id='spartan' className={`characterCard ${characterSelection === '_initiate' ? 'selected' : ""}`} onClick={handleSelection}>
                <img className='warrior' src='/resources/female_initiate.jpg' alt='Spartan'></img>
            </div>
        </div>
    )
}
