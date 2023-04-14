import React from 'react';
import { render, screen } from '@testing-library/react';
import UserReviews from '../../src/components/landingPage/UserReviews';

const reviews = () => {
    return [
        {
            id: 1,
            name: 'John Doe',
            review: 'Great place',
            rating: 5
        },
        {
            id: 2,
            name: 'Jane Doe',
            review: 'Amazing place',
            rating: 4
        },
        {
            id: 3,
            name: 'John Doe',
            review: 'Amazing place',
            rating: 5
        },
        {
            id: 4,
            name: 'John Doe',
            review: 'Amazing place',
            rating: 5
        },
        {
            id: 5,
            name: 'John Doe',
            review: 'Amazing place',
            rating: 5
        }
    ]
}

it('renders without crashing', () => {
    const { container } = render(<UserReviews reviews={reviews()} />);
    expect(container).toMatchSnapshot();
})

it('renders the same number of reviews as the number of reviews passed in', () => {
    render(<UserReviews reviews={reviews()} />);
    expect(screen.getAllByTestId('reviewText')).toHaveLength(reviews().length);
})