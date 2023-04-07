import React from 'react';
import '../../styles/Feature.css';

export default function Feature({ feature }) {
    return (
        <div className='feature'>
            <img className="icon" src={feature.Image} alt={`Feature ${feature.key}`} />
            <p className="text">{feature.description}</p>
        </div>
    )
}
