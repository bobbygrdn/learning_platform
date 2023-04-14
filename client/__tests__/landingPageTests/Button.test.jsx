import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../../src/components/landingPage/Button';
import '@testing-library/jest-dom';

it('renders without crashing', async () => {
    render(<Button purpose="landingPage" />);
    expect(await screen.findByTestId("landingPage")).toMatchSnapshot();
});

it('renders a button', () => {
    render(<Button />);
    expect(screen.getAllByRole('button')).toHaveLength(1);
});

it('renders a button with an onClick', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
});
