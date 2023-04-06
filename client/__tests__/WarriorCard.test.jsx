// Creates test suite for the warrior card component using jest and enzyme

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WarriorCard from '../src/components/landingPage/WarriorCard';

configure({ adapter: new Adapter() });

jest.mock('../src/styles/WarriorCard.css', () => ({}));
jest.mock('../src/styles/App.css', () => ({}));

const warrior = {
    name: 'Samurai'
}

it('renders without crashing', () => {
    const wrapper = shallow(<WarriorCard />);
    expect(wrapper).toMatchSnapshot();
})

it('should render card based on warrior type', () => {
    const wrapper = shallow(<WarriorCard warrior={warrior.name} />);
    expect(wrapper.find('img.card')).toHaveLength(1);
})