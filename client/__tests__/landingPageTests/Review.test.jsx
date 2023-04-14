import React from 'react';
import { render, screen } from '@testing-library/react';
import Review from '../../src/components/landingPage/Review';

const review = () => {
    return {
        quote: 'This is a quote',
        user: 'This is a user',
    }
}

it('renders without crashing', () => {
    const { container } = render(<Review review={review()} />);
    expect(container).toMatchSnapshot();
})

it('should render quote element with text class name', () => {
    render(<Review review={review()} />);
    expect(screen.getAllByTestId('reviewText')).toHaveLength(1);
})

it('should render paragraph element with user class name', () => {
    render(<Review review={review()} />);
    expect(screen.getAllByTestId('user')).toHaveLength(1);
})