import React from 'react'
import '../../styles/Header.css'

export default function Header() {
    return (
        <>
            <header className='header'>
                <div className='titles'>
                    <p className="title">Valor Academy</p>
                    <p className="sectiontitle">Become a Code Warrior</p>
                </div>

                <img className="logo" src={process.env.PUBLIC_URL + '/resources/valorAcademy_logo.jpg'} alt="Valor Academy logo" width={"200px"} height={"200px"} />
            </header >
        </>
    )
}
