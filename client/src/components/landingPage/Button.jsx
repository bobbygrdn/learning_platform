import React from 'react';
import '../../styles/Button.css';

export default function Button({ onClick, text, purpose }) {
    return (
        <>
            <button className={purpose} onClick={onClick}>{text}</button>
        </>
    )
}
