import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Feature from '../../src/components/landingPage/Feature';

configure({ adapter: new Adapter() });

jest.mock('../../src/styles/landingPage/Feature.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

const feature = {
    description: "Custom learning paths for different goals and skill levels",
    Image: `${process.env.PUBLIC_URL + "/resources/learningPath_icon.png"}`,
}

it('renders without crashing', () => {
    const wrapper = shallow(<Feature feature={feature} />);
    expect(wrapper).toMatchSnapshot();
})

it('should render the feature image with icon class name', () => {
    const wrapper = shallow(<Feature feature={feature} />);
    expect(wrapper.find('img.icon')).toHaveLength(1);
})

it('should render the feature description with text class name', () => {
    const wrapper = shallow(<Feature feature={feature} />);
    expect(wrapper.find('p.text')).toHaveLength(1);
})
