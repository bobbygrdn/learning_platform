import React, { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useWarriorStore from '../../../store/useWarriorStore';
import useTableStore from '../../../store/useTableStore';

export default function CharacterLore() {

    const { chosenWarrior } = useStore(useWarriorStore);
    const { modalOpen, setModalOpen } = useStore(useTableStore);

    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = (chosenWarrior !== null ? chosenWarrior.length : 0);

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    }

    useEffect(() => {
        const characterLoreText = document.querySelector(".characterLoreText");
        characterLoreText.scrollTop = 0;
    }, [currentPage])

    return (
        <div id='characterLore'>
            <button className='close' onClick={handleModalOpen}>Close</button>
            <div className='characterLoreContent'>
                <section style={{ width: '50%', height: '100%' }}>
                    <img id='characterLoreImage' src={chosenWarrior !== null ? chosenWarrior[currentPage - 1].image : ""} alt='warrior'></img>
                </section>
                <section className='characterLoreText' dangerouslySetInnerHTML={{ __html: (chosenWarrior !== null ? chosenWarrior[currentPage - 1].event : "") }}></section>
            </div>
            <div className='characterLorePagesButtons'>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button className='pagesButton' key={page} onClick={() => setCurrentPage(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    )
}
