import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GettingStarted from '../../src/components/landingPage/GettingStarted';

configure({ adapter: new Adapter() });

jest.mock('../../src/styles/landingPage/GettingStarted.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

it('renders without crashing', () => {
    const wrapper = shallow(<GettingStarted />);
    expect(wrapper).toMatchSnapshot();
})

it('should render four image elements with step class name', () => {
    const wrapper = shallow(<GettingStarted />);
    expect(wrapper.find('img.step')).toHaveLength(5);
})

it('should render three images of arrow icon with arrow class name', () => {
    const wrapper = shallow(<GettingStarted />);
    expect(wrapper.find('img.arrow')).toHaveLength(4);
})