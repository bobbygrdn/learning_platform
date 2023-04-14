import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '../../src/components/landingPage/Footer';

configure({ adapter: new Adapter() });

jest.mock('../../src/styles/landingPage/Footer.css', () => ({}));
jest.mock('../../src/styles/App.css', () => ({}));

it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
})

it('should render paragraph tag with copyright classname', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p.copyright')).toHaveLength(1);
})

it('should render footer element', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer')).toHaveLength(1);
})

it('should render paragraph tag with media classname', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p.media')).toHaveLength(1);
})

it('should render unorganized list tag', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('ul')).toHaveLength(1);
})

it('should render 4 list item tags', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('li')).toHaveLength(4);
})

it('should render list tag with 4 anchor tags', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('a')).toHaveLength(4);
})