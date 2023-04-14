import React from 'react';
import { render, screen } from '@testing-library/react';
import Demo from '../../src/components/landingPage/Demo';

it('renders without crashing', () => {
    const { container } = render(<Demo />);
    expect(container).toMatchSnapshot();
});

it('should render a react player that plays the demo video', async () => {
    render(<Demo />);
    expect(await screen.findAllByTestId('demo-video')).toHaveLength(1);
});
