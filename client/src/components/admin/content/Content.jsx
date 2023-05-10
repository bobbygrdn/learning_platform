import React, { useState } from 'react';
import '../../../styles/admin/content/Content.css';
import Table from './Table';

export default function Content() {
    const [currentTable, setCurrentTable] = useState("Courses");
    const [searchTerm, setSearchTerm] = useState("");

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
            </div>
            {<Table table={currentTable} searchTerm={searchTerm} setCurrentTable={setCurrentTable} />}
        </main>
    )
}
