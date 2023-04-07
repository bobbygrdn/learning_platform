/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Header from './Header'
import CallToAction from './CallToAction';
import Button from './Button'
import UserReviews from './UserReviews'
import KeyFeatures from './KeyFeatures'
import Overview from './Overview'
import GettingStarted from './GettingStarted'
import Footer from './Footer'
import Demo from './Demo';
import WarriorCards from './WarriorCards';
import '../../styles/landingPage/LandingPage.css'

export default function LandingPage() {
    const [reviews, setReviews] = React.useState([])

    const handleClick = () => {

    }

    return (
        <>
            <Header />
            <WarriorCards />
            <CallToAction />
            <Button purpose={"landingPage"} onClick={handleClick} text={"Start Your Journey"} />
            <UserReviews reviews={reviews} />
            <KeyFeatures />
            <Overview />
            <GettingStarted />
            <Demo video={""} />
            <Footer />
        </>
    )
}
