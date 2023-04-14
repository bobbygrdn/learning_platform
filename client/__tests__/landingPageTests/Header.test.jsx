import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/landingPage/Header';

it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
})

it('should render header element', () => {
    render(<Header />);
    expect(screen.getAllByTestId('header')).toHaveLength(1);
})

it('should render title element', () => {
    render(<Header />);
    expect(screen.getAllByTestId('title')).toHaveLength(1);
})

it('should render sectiontitle element', () => {
    render(<Header />);
    expect(screen.getAllByTestId('sectiontitle')).toHaveLength(1);
})

it('should render logo element', () => {
    render(<Header />);
    expect(screen.getAllByTestId('logo')).toHaveLength(1);
})