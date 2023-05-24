import React, { useEffect } from 'react';
import { useStore } from 'zustand';
import useTableStore from '../../../store/useTableStore';
import Modal from './Modal';

export default function Table({ searchTerm, table, setCurrentTable }) {
    const { currentPage, setCurrentPage, setCurrentEntity, currentContent, setcurrentContent, courses, setCourses, lessons, setLessons, quizzes, setQuizzes, questions, setQuestions, modalOpen, setModalOpen, setAction } = useStore(useTableStore);

    useEffect(() => {
        fetch("/api/v1/courses")
            .then(response => response.json())
            .then(data => {
                setCourses(data);
            })
    }, [courses, setCourses]);
    useEffect(() => {
        fetch("/api/v1/lessons")
            .then(response => response.json())
            .then(data => {
                setLessons(data);
            })
    }, [lessons, setLessons]);
    useEffect(() => {
        fetch("/api/v1/quizzes")
            .then(response => response.json())
            .then(data => {
                setQuizzes(data);
            })
    }, [quizzes, setQuizzes]);
    useEffect(() => {
        fetch("/api/v1/questions")
            .then(response => response.json())
            .then(data => {
                setQuestions(data);
            })
    }, [questions, setQuestions]);

    useEffect(() => {
        if (table === "Courses") {
            setcurrentContent(courses);
        }
    }, [table, courses, setcurrentContent]);

    const filteredContent = currentContent.filter((current) => {
        return current.title.includes(searchTerm);
    });

    const itemsPerPage = table === "Questions" ? 3 : 8;
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleModalOpen = (id, action) => {
        setAction(action);
        if (id !== null) {
            setCurrentEntity(currentContent.find((current) => current.id === id));
        }
        setModalOpen(!modalOpen);
    }

    const selectedTable = () => {
        switch (table) {
            case "Lessons":
                return <span>Quizzes</span>
            case "Quizzes":
                return <span>Questions</span>
            case "Questions":
                return <span>Information</span>
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
                return <span>
                    {selectTable.content}
                    <p>Options:</p>
                    <ul className='optionList'>
                        {selectTable.options.map((option, index) => <li key={index}>{index + 1}. {option.content}</li>)}</ul>
                    <p>{selectTable.answers.length === 1 ? "Answer:" : "Answers:"}</p>
                    <ul className='answerList'>
                        {selectTable.answers.map((answer, index) => <li key={index}>{answer.content}</li>)}</ul>
                </span >
            default:
                return <ul className='list'>{selectTable.lessons.map((lesson, index) => <li key={index}>{index + 1}. {lesson.title}</li>)}</ul>
        }
    }

    const handleRowClick = (event) => {
        // eslint-disable-next-line default-case
        switch (table) {
            case "Courses":
                setCurrentTable("Lessons");
                setcurrentContent(courses.find(course => course.id === parseInt(event.target.parentElement.id)).lessons);
                setCurrentEntity(event.target.parentElement.id);
                break;
            case "Lessons":
                setCurrentTable("Quizzes");
                setcurrentContent(lessons.find(lesson => lesson.id === parseInt(event.target.parentElement.id)).quizzes);
                setCurrentEntity(event.target.parentElement.id);
                break;
            case "Quizzes":
                setCurrentTable("Questions");
                setcurrentContent(quizzes.find(quiz => quiz.id === parseInt(event.target.parentElement.id), quizzes).questions)
                setCurrentEntity(event.target.parentElement.id);
                break;
        }
    }

    return (
        <div className={`${table}Table`}>
            <Modal table={table} handleModalOpen={handleModalOpen} />
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
                    {filteredContent.slice(startIndex, endIndex).map(thisTable => (
                        <tr key={thisTable.id} id={thisTable.id}>
                            <td onClick={handleRowClick}>
                                <span>{thisTable.title}</span>
                            </td>
                            <td onClick={handleRowClick}>
                                {selectedColumn(thisTable)}
                            </td>
                            <td>
                                <button className='edit' type='button' onClick={() => handleModalOpen(thisTable.id, "edit")}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleModalOpen(thisTable.id, "delete")}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td className='createButtonColumn' colSpan={3}>
                            <button className='create' type='button' onClick={() => handleModalOpen(null, "create")}>Create</button>
                        </td>
                    </tr>
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
