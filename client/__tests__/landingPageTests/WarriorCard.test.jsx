import React from 'react';
import { render, screen } from '@testing-library/react';
import WarriorCard from '../../src/components/landingPage/WarriorCard';

it('renders without crashing', () => {
    const { container } = render(<WarriorCard />);
    expect(container).toMatchSnapshot();
})

it('should render card based on warrior type', () => {
    render(<WarriorCard />);
    expect(screen.getAllByTestId('card')).toHaveLength(1);
});
