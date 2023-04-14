import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/landingPage/Footer';


it('renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
})

it('should render paragraph tag with copyright classname', () => {
    render(<Footer />);
    const paragraphs = screen.getAllByTestId('copyright');
    expect(paragraphs).toHaveLength(1);
})

it('should render footer element', () => {
    render(<Footer />);
    const footer = screen.getAllByTestId('footer');
    expect(footer).toHaveLength(1);
})

it('should render paragraph tag with media classname', () => {
    render(<Footer />);
    const paragraphs = screen.getAllByTestId('media');
    expect(paragraphs).toHaveLength(1);
})

it('should render unorganized list tag', () => {
    render(<Footer />);
    const unorganizedList = screen.getAllByTestId('ul');
    expect(unorganizedList).toHaveLength(1);
})

it('should render 4 list item tags', () => {
    render(<Footer />);
    const listItems = screen.getAllByTestId('li');
    expect(listItems).toHaveLength(4);
})

it('should render 4 anchor tags', () => {
    render(<Footer />);
    const anchors = screen.getAllByTestId('anchor');
    expect(anchors).toHaveLength(4);
})