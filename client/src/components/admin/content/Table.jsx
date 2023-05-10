import React, { useState } from 'react';

export default function Table({ currentTable, searchTerm, table }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const filteredTable = currentTable.filter((current) =>
        current.title.includes(searchTerm)
    );

    const itemsPerPage = 8;
    const totalPages = Math.ceil(filteredTable.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleEditModal = (id) => {
        setEditModalOpen(!editModalOpen);
    }

    const handleDeleteModal = (id) => {
        setDeleteModalOpen(!deleteModalOpen);
    }

    const selectedTable = () => {
        switch (table) {
            case "Lessons":
                return <span>Quizzes</span>
            case "Quizzes":
                return <span>Questions</span>
            case "Questions":
                return <span>Options</span>
            default:
                return <span>Lessons</span>
        }
    }

    const selectedColumn = (selectTable) => {
        switch (table) {
            case "Lessons":
                return <ul className='list'>{selectTable.quizzes.map((quiz, index) => <li key={index}>{index + 1}. {quiz.title}</li>)}</ul>
            case "Quizzes":
                return <ul className='list'>{selectTable.questions.map((question, index) => <li key={index}>{index + 1}. {question.title}</li>)}</ul>
            case "Questions":
                return <ul className='list'>{selectTable.options.map((option, index) => <li key={index}>{index + 1}. {option.content}</li>)}</ul>
            default:
                return <ul className='list'>{selectTable.lessons.map((lesson, index) => <li key={index}>{index + 1}. {lesson.title}</li>)}</ul>
        }
    }

    return (
        <div className={`${table}Table`}>
            <table>
                <thead>
                    <tr>
                        <th>
                            <span>Title</span>
                        </th>
                        <th>
                            {selectedTable()}
                        </th>
                        <th>
                            <span>Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTable.slice(startIndex, endIndex).map(thisTable => (
                        <tr key={thisTable.id}>
                            <td>
                                <span>{thisTable.title}</span>
                            </td>
                            <td>
                                {selectedColumn(thisTable)}
                            </td>
                            <td className='actions'>
                                <button className='edit' type='button' onClick={() => handleEditModal(thisTable.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDeleteModal(thisTable.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button className='pagesButton' key={page} onClick={() => setCurrentPage(page)}>{page}</button>
                ))}
            </div>
        </div>
    )
}
