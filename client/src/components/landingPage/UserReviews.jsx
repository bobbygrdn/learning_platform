import React from 'react';
import Review from './Review';
import '../../styles/landingPage/UserReviews.css';
export default function UserReviews({ reviews }) {
    return (
        <div className='reviews' data-testid="reviews">
            <h3 style={{ color: '#fff', fontSize: '2em', fontWeight: 'bold', marginBottom: '.5em', textAlign: 'center' }}>Platform Reviews</h3>
            {reviews ? reviews.map((review, index) => {
                return <Review key={index} review={review} />
            }) : null}
        </div>
    )
}
