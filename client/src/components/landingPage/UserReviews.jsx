import React from 'react';
import Review from './Review';
import '../../styles/landingPage/UserReviews.css';
export default function UserReviews({ reviews }) {
    return (
        <div className='reviews' data-testid="reviews">
            {reviews ? reviews.map((review, index) => {
                return <Review key={index} review={review} />
            }) : null}
        </div>
    )
}
