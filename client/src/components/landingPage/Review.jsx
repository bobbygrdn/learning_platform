import React from 'react'

export default function Review({ review }) {
    // TODO: Finish user reviews component
    return (
        <>
            <q className='text'>{review.quote}</q>
            <p className='user'>{review.user}</p>
        </>
    )
}
