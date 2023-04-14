import React from 'react';
import '../../styles/landingPage/Review.css';

export default function Review({ review }) {
    return (
        <>
            <q className='reviewText' data-testid="reviewText">{review.quote}</q>
            <p className='user' data-testid="user">{review.user}</p>
        </>
    )
}
