import React from 'react';
import Feature from './Feature';
import '../../styles/landingPage/KeyFeatures.css'

export default function KeyFeatures() {
    const features = [
        {
            description: "Custom learning paths for different goals and skill levels",
            Image: `${process.env.PUBLIC_URL + "/resources/learningPath_icon.png"}`,
        },
        {
            description: "Access a library of courses created by expert programmers",
            Image: `${process.env.PUBLIC_URL + "/resources/library_icon.png"}`,
        },
        {
            description: "Engage with a community of fellow learners and experts",
            Image: `${process.env.PUBLIC_URL + "/resources/forum_icon.png"}`,
        },
        {
            description: "Mobile-first design for on-the-go learning",
            Image: `${process.env.PUBLIC_URL + "/resources/mobile_icon.png"}`,
        },
        {
            description: "Earn badges and certificates to demonstrate your knowledge and progress",
            Image: `${process.env.PUBLIC_URL + "/resources/certificate_icon.png"}`,
        },
        {
            description: "Personalized recommendations based on your learning history and preferences",
            Image: `${process.env.PUBLIC_URL + "/resources/recommendations_icon.png"}`,
        }
    ]
    return (
        <div className='features'>
            {features.map((feature, index) => (
                <Feature key={index} feature={feature} />
            ))}
        </div>
    )
}
