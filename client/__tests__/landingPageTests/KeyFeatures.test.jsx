import React from 'react';
import { render } from '@testing-library/react';
import KeyFeatures from '../../src/components/landingPage/KeyFeatures.jsx';

jest.mock('../../src/styles/landingPage/KeyFeatures.css', () => ({}));
jest.mock('../../src/styles/landingPage/Feature.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

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

it('renders without crashing', () => {
    const { screen } = render(<KeyFeatures />);
    expect(screen.getByTestId('features')).toMatchSnapshot();
})

it('should render six key feature elements', () => {
    const { screen } = render(<KeyFeatures features={features
        ()} />);
    expect(screen.getAllByTestId('feature')).toHaveLength(6);
})