import React from 'react'
import WarriorCard from './WarriorCard'
import '../../styles/landingPage/WarriorCard.css'

export default function WarriorCards() {
    return (
        <div className='warriorCards'>
            <ul className='warriorList' data-testid="warriorList">
                <li className="warriorName" data-testid="warriorName">Samurai</li>
                <li className="warriorName" data-testid="warriorName">Legionnaire</li>
                <li className="warriorName" data-testid="warriorName">Spartan</li>
                <li className="warriorName" data-testid="warriorName">Viking</li>
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
