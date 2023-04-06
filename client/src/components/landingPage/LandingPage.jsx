/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Header from './Header'
import WarriorCard from './WarriorCard'
import CallToAction from './CallToAction';
import Button from './Button'
import UserReviews from './UserReviews'
import KeyFeatures from './KeyFeatures'
import Overview from './Overview'
import GettingStarted from './GettingStarted'
import Footer from './Footer'

export default function LandingPage() {
    const [reviews, setReviews] = React.useState([])

    return (
        <>
            <Header />
            <ul className='warriorList'>
                <li className="warriorName">Samurai</li>
                <li className="warriorName">Legionnaire</li>
                <li className="warriorName">Spartan</li>
                <li className="warriorName">Viking</li>
            </ul>
            <WarriorCard warrior="Samurai" />
            <WarriorCard warrior="Legionnaire" />
            <WarriorCard warrior="Spartan" />
            <WarriorCard warrior="Viking" />
            <CallToAction />
            <Button />
            <UserReviews reviews={reviews} />
            <KeyFeatures />
            <Overview />
            <GettingStarted />
            <Footer />
        </>
    )
}
