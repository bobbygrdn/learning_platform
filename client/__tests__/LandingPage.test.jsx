// Creates a jest unit testing suite for the LandingPage component.

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from '../src/components/LandingPage';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper).toMatchSnapshot()
})

