import React from 'react'

export default function Header() {
    // TODO: Finish header component
    return (
        <div className='header'>
            <h1 className="title">Valor Academy</h1>
            <h2 className="subtitle">Become a Code Warrior</h2>
            <img className="logo" src={process.env.PUBLIC_URL + '/resources/valorAcademy_logo.jpg'} alt="Valor Academy logo" width={"100px"} height={"100px"} />
        </div>
    )
}
