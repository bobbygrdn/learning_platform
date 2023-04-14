import React from 'react';
import { render, screen } from '@testing-library/react';
import KeyFeatures from '../../src/components/landingPage/KeyFeatures.jsx';

const features = () => {
    return [
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        }
    ]
}

it('renders without crashing', async () => {
    render(<KeyFeatures />);
    expect(await screen.findAllByTestId('features')).toMatchSnapshot();
})

it('should render six key feature elements', () => {
    render(<KeyFeatures features={features()} />);
    expect(screen.getAllByTestId('feature')).toHaveLength(6);
})