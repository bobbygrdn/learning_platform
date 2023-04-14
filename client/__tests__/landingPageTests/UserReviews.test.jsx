import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserReviews from '../src/components/landingPage/UserReviews';

configure({ adapter: new Adapter() });

jest.mock('../src/styles/Button.css', () => ({}));
jest.mock('../src/styles/App.css', () => ({}));

const reviews = () => {
    return [
        {
            id: 1,
            name: 'John Doe',
            review: 'Great place',
            rating: 5
        },
        {
            id: 2,
            name: 'Jane Doe',
            review: 'Amazing place',
            rating: 4
        },
        {
            id: 3,
            name: 'John Doe',
            review: 'Amazing place',
            rating: 5
        },
        {
            id: 4,
            name: 'John Doe',
            review: 'Amazing place',
            rating: 5
        },
        {
            id: 5,
            name: 'John Doe',
            review: 'Amazing place',
            rating: 5
        }
    ]
}

it('renders without crashing', () => {
    const wrapper = shallow(<UserReviews />);
    expect(wrapper).toMatchSnapshot();
})

it('renders the same number of reviews as the number of reviews passed in', () => {
    const wrapper = shallow(<UserReviews reviews={reviews()} />);
    expect(wrapper.find('Review')).toHaveLength(reviews().length);
})