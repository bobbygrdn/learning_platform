import React from 'react';
import '../../styles/landingPage/Review.css';

export default function Review({ review }) {
    return (
        <>
            <q className='reviewText'>{review.quote}</q>
            <p className='user'>{review.user}</p>
        </>
    )
}
