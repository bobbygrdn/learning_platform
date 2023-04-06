// Creates test suite for the key features component using jest and enzyme

import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KeyFeatures from '../src/components/landingPage/KeyFeatures';

configure({ adapter: new Adapter() });

jest.mock('../src/styles/KeyFeatures.css', () => ({}));
jest.mock('../src/styles/App.css', () => ({}));

const features = () => {
    return [
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        },
        {
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            image: "someurl/picture"
        }
    ]
}

it('renders without crashing', () => {
    const wrapper = shallow(<KeyFeatures />);
    expect(wrapper).toMatchSnapshot();
})

it('should render six key feature elements', () => {
    const wrapper = shallow(<KeyFeatures features={features
        ()} />);
    expect(wrapper.find('Feature')).toHaveLength(6);
})