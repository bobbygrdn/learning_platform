import React from 'react';
import { render, screen } from '@testing-library/react';
import CallToAction from '../../src/components/landingPage/CallToAction';

jest.mock('../../src/styles/landingPage/CallToAction.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

it('renders without crashing', () => {
    const { container } = render(<CallToAction />);
    expect(container).toMatchSnapshot();
});

it('should render paragraph elements', () => {
    render(<CallToAction />);
    const paragraphs = screen.getAllByTestId('subheading');
    expect(paragraphs).toHaveLength(3);
});
