import React from 'react';
import '../../styles/landingPage/Button.css';

export default function Button({ onClick, text, purpose, type }) {
    return (
        <>
            <button className={purpose} type={type} onClick={onClick} data-testid={purpose}>{text}</button>
        </>
    )
}
