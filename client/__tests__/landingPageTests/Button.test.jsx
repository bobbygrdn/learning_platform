import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../src/components/landingPage/Button';

configure({ adapter: new Adapter() });

jest.mock('../../src/styles/LandingPage/Button.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

it('renders without crashing', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
})

it('renders a button', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).toHaveLength(1);
})

it('renders a button with an onClick', () => {
    const wrapper = shallow(<Button onClick={() => { }} />);
    expect(wrapper.find('button')).toHaveLength(1);
})