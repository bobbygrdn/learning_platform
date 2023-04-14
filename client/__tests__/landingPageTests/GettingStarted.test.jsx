import React from 'react';
import { render, screen } from '@testing-library/react';
import GettingStarted from '../../src/components/landingPage/GettingStarted';

it('renders without crashing', () => {
    const { container } = render(<GettingStarted />);
    expect(container).toMatchSnapshot();
})

it('should render paragraph with steps class name', () => {
    render(<GettingStarted />);
    expect(screen.getAllByTestId('steps')).toHaveLength(1);
})

it('should render five image elements with step class name', () => {
    render(<GettingStarted />);
    expect(screen.getAllByTestId('step')).toHaveLength(5);
})

it('should render four images of arrow icon with arrow class name', () => {
    render(<GettingStarted />);
    expect(screen.getAllByTestId('arrow')).toHaveLength(4);
})