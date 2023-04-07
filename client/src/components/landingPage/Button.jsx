import React from 'react'

export default function Button({ onClick, text, purpose }) {
    return (
        <>
            <button className={purpose} onClick={onClick}>{text}</button>
        </>
    )
}
