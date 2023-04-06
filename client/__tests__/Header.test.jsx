// Creates test suite for the header component using jest and enzyme

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../src/components/landingPage/Header';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
})

it('should render header element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header')).toHaveLength(1);
})

it('should render title element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.title')).toHaveLength(1);
})

it('should render subtitle element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.subtitle')).toHaveLength(1);
})

it('should render logo element', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.logo')).toHaveLength(1);
})