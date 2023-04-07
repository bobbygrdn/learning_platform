import React from 'react'
import WarriorCard from './WarriorCard'
import '../../styles/landingPage/WarriorCard.css'

export default function WarriorCards() {
    return (
        <div className='warriorCards'>
            <ul className='warriorList'>
                <li className="warriorName">Samurai</li>
                <li className="warriorName">Legionnaire</li>
                <li className="warriorName">Spartan</li>
                <li className="warriorName">Viking</li>
            </ul>
            <div className='warriors'>
                <WarriorCard warrior="Samurai" />
                <WarriorCard warrior="Legionnaire" />
                <WarriorCard warrior="Spartan" />
                <WarriorCard warrior="Viking" />
            </div>
        </div>
    )
}
