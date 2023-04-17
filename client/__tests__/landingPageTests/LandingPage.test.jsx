import React, { useState } from 'react';
import { render, screen, renderHook } from '@testing-library/react';
import LandingPage from '../../src/components/landingPage/LandingPage';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
    fetchMock.resetMocks();
})

it('renders without crashing', () => {
    const { container } = render(<LandingPage />);
    expect(container).toMatchSnapshot();
})

test('initial state of reviews is an empty array', () => {
    const { result } = renderHook(() => useState([]));
    expect(result.current[0]).toEqual([]);
});

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