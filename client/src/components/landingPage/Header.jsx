import React from 'react'
import '../../styles/landingPage/Header.css'

export default function Header() {
    return (
        <>
            <header className='header' data-testid="header">
                <div className='titles'>
                    <p className="title" data-testid="title">Valor Academy</p>
                    <p className="sectiontitle" data-testid="sectiontitle">Become a Code Warrior</p>
                </div>

                <img className="logo" src={process.env.PUBLIC_URL + '/resources/valorAcademy_logo.png'} data-testid="logo" alt="Valor Academy logo" />
            </header >
        </>
    )
}
