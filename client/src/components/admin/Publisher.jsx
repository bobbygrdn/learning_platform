import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';
import useTableStore from '../../store/useTableStore';
import { Button, Card } from 'react-bootstrap';
import '../../styles/admin/Publisher.css';
import { toast } from 'react-toastify';

export default function Publisher() {

    const { token } = useStore(useAuthStore);
    const { currentTable, setCurrentTable, searchTerm, setSearchTerm, quizzes, questions, lessons, courses, currentContent, setCurrentContent, currentPage, setCurrentPage, setCurrentEntity, preview, setPreview } = useStore(useTableStore);

    const handleBack = () => {
        setCurrentTable("Courses");
        setCurrentContent(courses);
        setPreview(null);
    }

    useEffect(() => {
        if (currentTable === 'Courses') {
            setCurrentContent(courses);
        }
    }, [courses, currentTable, setCurrentContent]);

    const filteredContent = currentContent.filter((current) => {
        return current.title.includes(searchTerm);
    });

    const itemsPerPage = 4;
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleCardClick = (id) => {
        setCurrentPage(1);
        setPreview(null);
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

    const selectEntity = (elementId) => {
        switch (currentTable) {
            case "Lessons":
                return lessons[elementId - 1];
            case "Quizzes":
                return quizzes[elementId - 1];
            case "Questions":
                return questions[elementId - 1];
            default:
                return courses[elementId - 1];
        }
    }

    const handleSelection = (e) => {
        e.stopPropagation();
        const element = selectEntity(e.target.id);

        toast.info(
            <div>
                <p>Are you sure you want to update {element.title}?</p>
                <div className='buttons'>
                    <button className='yes' onClick={() => handlePublish(element.id)}>Yes</button>
                    <button className='no' onClick={toast.dismiss}>No</button>
                </div>
            </div>,
            {
                autoClose: false,
            }
        )
    }

    const handlePublish = (elementId) => {
        const url = `${currentTable.toLowerCase()}/${elementId}`;

        const body = selectEntity(elementId);

        fetch(`/api/v1/${url}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authentication": `Bearer ${token}`
            },
            body: JSON.stringify({
                isPublished: !body.published
            })
        })
            .then(data => {
                toast.success(`${body.title} has been successfully ${body.published === true ? "Unpublished" : "Published"}`);
                window.location.reload();
            })
            .catch(error => {
                toast.error(`${body.title} could not be ${body.published === true ? "Unpublished" : "Published"}`);
            })
    }

    const handlePreview = (e) => {
        e.stopPropagation();
        const element = selectEntity(e.target.id);
        setPreview(element.content);
        document.querySelector(".publisherPreview").innerHTML = preview;
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
                        <Card className='Card' key={currentSelection.id} onClick={() => handleCardClick(currentSelection.id)} style={{ width: '18em', height: '14em', padding: '1em', textAlign: 'center' }}>
                            <Card.Body>
                                <Card.Title style={{ marginBottom: '1em' }}> {currentSelection.title}</Card.Title>
                                {currentTable === "Courses" ? currentSelection.lessons.map((element, index) => {
                                    return (<Card.Text key={element.id} style={{ textAlign: 'left' }}>{`${index + 1}.`} {element.title}</Card.Text>);
                                }) : null}
                                <Card.Text style={{ textAlign: 'left', textOverflow: 'ellipsis', overflow: 'hidden' }}>{currentTable !== "Courses" ? `${currentSelection.description.substring(0, 80)}...` : null}</Card.Text>
                                <div style={{ textAlign: 'left' }}>{currentTable === 'Questions' ? <ul style={{ display: 'flex', flexDirection: 'column' }}>Answer: {currentSelection.answers.map(answer => <li key={answer.id}>- {answer.content}</li>)}</ul> : ''}</div>
                                {currentTable === "Lessons" || currentTable === "Questions" ?
                                    <div style={{ marginTop: '1.5em' }}>
                                        <Button id={currentSelection.id} className={currentSelection.published === true ? "unpublishButton" : "publishButton"} onClick={(e) => handleSelection(e)}>{currentSelection.published === true ? "Unpublish" : "Publish"}</Button>
                                        <Button id={currentSelection.id} className='previewButton' onClick={handlePreview}>Preview</Button>
                                    </div> : <Button id={currentSelection.id} className={currentSelection.published === true ? "unpublishButton" : "publishButton"} onClick={(e) => handleSelection(e)} style={{ marginTop: '4em' }}>{currentSelection.published === true ? "Unpublish" : "Publish"}</Button>}
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
