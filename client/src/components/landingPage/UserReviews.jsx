import React from 'react';
import Review from './Review';
export default function UserReviews({ reviews }) {
    return (
        <>
            {reviews ? reviews.map((review, index) => {
                return <Review key={index} review={review} />
            }) : null}
        </>
    )
}
