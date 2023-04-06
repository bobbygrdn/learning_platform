// Creates a jest unit testing suite for the LandingPage component.

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from '../src/components/landingPage/LandingPage';

jest.mock('../src/styles/LandingPage.css', () => ({}));
jest.mock('../src/styles/App.css', () => ({}));
jest.mock('../src/styles/Header.css', () => ({}));

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper).toMatchSnapshot()
})

it('should render a header component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('Header')).toHaveLength(1)
})

it('should render a list of warrior names', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('.warriorList')).toHaveLength(1)
})

it('should render a warrior name', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('.warriorName')).toHaveLength(4)
})

it('should render warrior cards', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('WarriorCard')).toHaveLength(4)
})

it('should render call to action statements', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('CallToAction')).toHaveLength(1)
})

it('should render button component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('Button')).toHaveLength(1)
})

it('should render user reviews component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('UserReviews')).toHaveLength(1)
})

it('should render key features component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('KeyFeatures')).toHaveLength(1)
})

it('should render overview component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('Overview')).toHaveLength(1)
})

it('should render getting started component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('GettingStarted')).toHaveLength(1)
})

it('should render demo component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('Demo')).toHaveLength(1)
})

it('should render a footer component', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('Footer')).toHaveLength(1)
})