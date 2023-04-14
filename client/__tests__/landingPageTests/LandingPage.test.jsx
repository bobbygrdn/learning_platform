import React from 'react';
import { render, screen } from '@testing-library/react';
import LandingPage from '../../src/components/landingPage/LandingPage';

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: () => { },
}))

it('renders without crashing', () => {
    const { container } = render(<LandingPage />);
    expect(container).toMatchSnapshot();
})

it('should render a header component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('header')).toHaveLength(1);
})

it('should render a list of warrior names', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('warriorList')).toHaveLength(1);
})

it('should render a warrior name', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('warriorName')).toHaveLength(4);
})

it('should render warrior cards', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('card')).toHaveLength(4);
})

it('should render call to action statements', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('callToAction')).toHaveLength(1);
})

it('should render button component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('landingPage')).toHaveLength(1);
})

it('should render user reviews component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('reviews')).toHaveLength(1);
})

it('should render key features component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('features')).toHaveLength(1);
})

it('should render overview component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('overview')).toHaveLength(1);
})

it('should render getting started component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('steps')).toHaveLength(1);
})

it('should render demo component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('demo-video')).toHaveLength(1);
})

it('should render a footer component', () => {
    render(<LandingPage />);
    expect(screen.getAllByTestId('footer')).toHaveLength(1);
})