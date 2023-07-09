import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import CallToAction from './CallToAction';
import Button from './Button'
import UserReviews from './UserReviews'
import KeyFeatures from './KeyFeatures'
import Overview from './Overview'
import Footer from './Footer'
import WarriorCards from './WarriorCards';
import '../../styles/landingPage/LandingPage.css'
import { useStore } from 'zustand';
import useAuthStore from '../../store/useAuthStore';

export default function LandingPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const { role } = useStore(useAuthStore);

    const navigate = useNavigate();

    useEffect(() => {
        if (role != null) {
            role === "Admin" ?
                navigate('/admin/content') : navigate('dashboard/profile');
        }
    }, [navigate, role])

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
            <Overview />
            <CallToAction />
            <Button purpose={"landingPage"} type={"submit"} onClick={handleClick} text={"Start Your Journey"} />
            <UserReviews reviews={reviews} loading={loading} />
            <h3 style={{ color: '#fff', fontSize: '2em', fontWeight: 'bold', marginBottom: '.5em', textAlign: 'center' }}>Key Features</h3>
            <KeyFeatures />
            <Footer />
        </>
    )
}
