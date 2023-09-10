import React, { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import useAuthStore from '../../../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function Questions() {

    const { myCourses, currentCourse, completeLesson } = useStore(useAuthStore);

    const navigate = useNavigate();

    const currentQuestions = (myCourses !== undefined && currentCourse !== undefined && completeLesson !== undefined) ? myCourses?.find(course => course.id === parseInt(currentCourse))?.lessons.find(lesson => lesson.id === parseInt(completeLesson))?.quizzes[0].questions : '';

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const currentAnswer = (currentQuestions !== null && currentQuestions !== undefined) ? currentQuestions[currentQuestion]?.answers[0]?.content : '';

    const [userAnswer, setUserAnswer] = useState('');
    const [result, setResult] = useState('');
    const [answers, setAnswers] = useState(0);
    const [currentValue, setCurrentValue] = useState("check");
    const [currentText, setCurrentText] = useState("Check Answer");

    useEffect(() => {
        if (result === true) {
            document.querySelector('.result').style.color = '#079c07';
        } else {
            document.querySelector('.result').style.color = '#ff0000';
        }
    }, [result])

    useEffect(() => {
        setResult(currentAnswer === userAnswer)
    }, [currentAnswer, userAnswer])

    const handleUserSelection = (e) => {
        setUserAnswer(e.target.value)
        document.querySelector(".result").style.visibility = 'hidden';
    }

    const handleButtonClick = (e) => {
        switch (e.target.value) {
            case "check":
                handleCheckAnswer();
                if (result === true) {
                    setCurrentValue("next")
                    setCurrentText("Next Question")
                }
                break;
            case "next":
                if (answers === currentQuestions.length) {
                    navigate('/dashboard/myLearning/congratulations');
                    break;
                }
                setResult(false);
                setCurrentValue("check");
                setCurrentText("Check Answer")
                document.querySelector(".result").style.visibility = 'hidden';
                setCurrentQuestion(currentQuestion + 1);
                break;
            default:
                break;
        }

    }

    const handleCheckAnswer = () => {
        if (result === true) {
            setAnswers(answers + 1)
        }
        document.querySelector(".result").style.visibility = 'visible';
    }

    return (
        <div className='currentQuestionsContainer'>
            <h1 style={{ marginBottom: '1em' }}>{currentQuestions && currentQuestions[currentQuestion].title}</h1>
            <div className='currentQuestionsContent'>
                <h3>{currentQuestions && currentQuestions[currentQuestion].content}</h3>
                <ul id='currentQuestionsOptions'>{currentQuestions && currentQuestions[currentQuestion].options.map(option => (
                    <li key={option.id}>
                        <input type='radio' name='group' value={option.content} onChange={handleUserSelection}></input>
                        <label className='questionLabel'>{option.content}</label>
                    </li>
                ))}</ul>
                <button className='currentQuestionButton' value={currentValue} onClick={(e) => handleButtonClick(e)}>{currentText}</button>
                <span className='result'>{result === true ? "Correct!" : "Incorrect"}</span>
            </div>
        </div>
    )
}
