import React from 'react'

export default function Feature({ feature }) {
    return (
        <>
            <img className="logo" src={feature.Image} alt={`Feature ${feature.key}`} />
            <p className="text">{feature.description}</p>
        </>
    )
}
