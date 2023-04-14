import React from 'react';
import '../../styles/landingPage/Overview.css';

export default function Overview() {
    return (
        <div className='overview' data-testid="overview">
            <p className='callStatement' data-testid="callStatement">Welcome to Valor Academy!</p>
            <p className='overviewText' data-testid="overviewText">
                This platform was created to engage and help guide the developer community into a new style of learning. Our focus is to allow developers in all stages of their journey to grow and become more confident in their abilities. As you progress through the different courses, lessons, quizzes and more, you will see that we focus on providing great content and a roadmap for you to level up!
            </p>
        </div>
    )
}
