import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CallToAction from '../../src/components/landingPage/CallToAction';

configure({ adapter: new Adapter() });

jest.mock('../../src/styles/landingPage/CallToAction.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

it('renders without crashing', () => {
    const wrapper = shallow(<CallToAction />);
    expect(wrapper).toMatchSnapshot();
})

it('should render paragraph elements', () => {
    const wrapper = shallow(<CallToAction />);
    expect(wrapper.find('p')).toHaveLength(3);
})