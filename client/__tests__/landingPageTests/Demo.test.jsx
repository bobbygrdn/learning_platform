import React from 'react';
import ReactPlayer from 'react-player';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Demo from '../../src/components/landingPage/Demo';

configure({ adapter: new Adapter() });

jest.mock('../../src/styles/landingPage/Demo.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

it('renders without crashing', () => {
    const wrapper = shallow(<Demo />);
    expect(wrapper).toMatchSnapshot();
})

it('should render a react player that plays the demo video', () => {
    const wrapper = shallow(<Demo />);
    expect(wrapper.find(ReactPlayer)).toHaveLength(1);
})