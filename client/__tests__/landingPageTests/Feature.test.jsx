import React from 'react';
import { render, screen } from '@testing-library/react';
import Feature from '../../src/components/landingPage/Feature';


const feature = {
    description: "Custom learning paths for different goals and skill levels",
    Image: `${process.env.PUBLIC_URL + "/resources/learningPath_icon.png"}`,
}

it('renders without crashing', () => {
    const { container } = render(<Feature feature={feature} />);
    expect(container).toMatchSnapshot();
})

it('should render the feature image with icon class name', () => {
    render(<Feature feature={feature} />);
    expect(screen.getByRole('img')).toMatchSnapshot();
})

it('should render the feature description with text class name', () => {
    render(<Feature feature={feature} />);
    expect(screen.getAllByTestId('text')).toHaveLength(1);
})
