import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';
import useTableStore from '../../store/useTableStore';
import { Button, Card } from 'react-bootstrap';
import '../../styles/admin/Publisher.css';

export default function Publisher() {

    const { token } = useStore(useAuthStore);
    const { currentTable, setCurrentTable, searchTerm, setSearchTerm, quizzes, questions, lessons, courses, currentContent, setCurrentContent, currentPage, setCurrentPage, setCurrentEntity } = useStore(useTableStore);

    const handleBack = () => {
        setCurrentTable("Courses");
    }

    useEffect(() => {
        if (currentTable === 'Courses') {
            setCurrentContent(courses);
        }
    }, [courses, currentTable, setCurrentContent]);

    const filteredContent = currentContent.filter((current) => {
        return current.title.includes(searchTerm);
    });

    const itemsPerPage = 8;
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleCardClick = (id) => {
        switch (currentTable) {
            case "Courses":
                setCurrentTable("Lessons");
                setCurrentContent(courses.find(course => course.id === id).lessons);
                setCurrentEntity(id);
                break;
            case "Lessons":
                setCurrentTable("Quizzes");
                setCurrentContent(lessons.find(lesson => lesson.id === id).quizzes);
                setCurrentEntity(id);
                break;
            case "Quizzes":
                setCurrentTable("Questions");
                setCurrentContent(quizzes.find(quiz => quiz.id === id, quizzes).questions);
                setCurrentEntity(id);
                break;
            default:
        }
    }

    // TODO: Add fetch to handlePublish Method(use token for request)
    const handlePublish = (e) => {
        e.stopPropagation();
        console.log("Publish")
    }

    // TODO: Add logic to add content to the preview panel based on the current selection
    const handlePreview = (e) => {
        e.stopPropagation();
        console.log("Preview")
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
            <div className='publisherWindow'>
                <div className='publisherTools'>
                    {filteredContent.slice(startIndex, endIndex).map(currentSelection => (
                        <Card className='Card' key={currentSelection.id} onClick={() => handleCardClick(currentSelection.id)} style={{ width: '18em', height: '6em', padding: '1em', textAlign: 'center' }}>
                            <Card.Body>
                                <Card.Title style={{ marginBottom: '1em' }}> {currentSelection.title}</Card.Title>
                                {currentTable !== "Courses" ?
                                    <div>
                                        <Button className='publishButton' onClick={handlePublish}>{currentSelection.published === true ? "Unpublish" : "Publish"}</Button>
                                        <Button className='previewButton' onClick={handlePreview}>Preview</Button>
                                    </div> : <Button className='publishButton' onClick={handlePublish}>{currentSelection.published === true ? "Unpublish" : "Publish"}</Button>}
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div className='publisherPagesButtons'>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button className='pagesButton' key={page} onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    ))}
                </div>
                <div className='publisherPreview'></div>
            </div>
        </main>
    )
}
