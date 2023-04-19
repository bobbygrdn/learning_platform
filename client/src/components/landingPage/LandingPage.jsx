import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

export default function LandingPage({ token }) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        if (token != null) {
            navigate("/dashboard");
        }
    }, [navigate, token])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/dummyData/reviews.json');
            const data = await response.json();
            setReviews(data);
            setLoading(false);
        };
        fetchData();
    }, [])

    const handleClick = async () => {
        navigate("/login");
    }

    return (
        <>
            <Header />
            <WarriorCards />
            <CallToAction />
            <Button purpose={"landingPage"} type={"submit"} onClick={handleClick} text={"Start Your Journey"} />
            <UserReviews reviews={reviews} loading={loading} />
            <KeyFeatures />
            <Overview />
            <GettingStarted />
            {/* TODO: Add demo video url*/}
            <Demo video={""} />
            <Footer />
        </>
    )
}
