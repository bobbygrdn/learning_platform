import React from 'react';
import Review from './Review';
import '../../styles/landingPage/UserReviews.css';
export default function UserReviews({ reviews }) {
    // TODO: Add loading state and render reviews after loading is complete
    return (
        <div className='reviews' data-testid="reviews">
            {reviews ? reviews.map((review, index) => {
                return <Review key={index} review={review} />
            }) : null}
        </div>
    )
}
