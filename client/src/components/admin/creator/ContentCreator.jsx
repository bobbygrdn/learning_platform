import React from 'react';
import '../../../styles/admin/Content.css';
import Table from './Table';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import { Button } from 'react-bootstrap';

export default function ContentCreator() {
    const { currentTable, setCurrentTable, searchTerm, setSearchTerm, courses, setCurrentContent } = useStore(useTableStore);

    const handleBack = () => {
        setCurrentTable("Courses");
        setCurrentContent(courses);
    }

    return (
        <main className='mainContent'>
            <h1 className='contentTitle'>{currentTable}</h1>
            <div className='searchBar'>
                <h3 className='searchTitle'>Search</h3>
                <input
                    className='searchInput'
                    type='text'
                    placeholder='Search by Title...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {currentTable !== 'Courses' && <Button className='back' onClick={handleBack}>Back</Button>}
            </div>
            <Table />
        </main>
    )
}
