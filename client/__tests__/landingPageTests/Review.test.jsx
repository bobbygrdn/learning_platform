import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Review from '../../src/components/landingPage/Review';

configure({ adapter: new Adapter() });

jest.mock('../../src/styles/landingPage/Review.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

const review = () => {
    return {
        quote: 'This is a quote',
        user: 'This is a user',
    }
}

it('renders without crashing', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper).toMatchSnapshot();
})

it('should render quote element with text class name', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find('q.reviewText')).toHaveLength(1);
})

it('should render paragraph element with user class name', () => {
    const wrapper = shallow(<Review review={review} />);
    expect(wrapper.find('p.user')).toHaveLength(1);
})