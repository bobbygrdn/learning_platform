import React from 'react';
import { render, screen } from '@testing-library/react';
import Overview from '../../src/components/landingPage/Overview';

it('renders without crashing', () => {
    const { container } = render(<Overview />);
    expect(container).toMatchSnapshot();
})

it('should render paragraph element with class of text', () => {
    render(<Overview />);
    expect(screen.getAllByTestId('overviewText')).toHaveLength(1);
})

it('should render paragraph element with class of callStatement', () => {
    render(<Overview />);
    expect(screen.getAllByTestId('callStatement')).toHaveLength(1);
})