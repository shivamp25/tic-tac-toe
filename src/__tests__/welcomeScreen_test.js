import React from 'react';
import WelcomeScreen from '../components/WelcomeScreen';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });


describe('WelcomeScreen', () => {
    it('should be selected by class name', () => {
        const container = shallow(<WelcomeScreen />);
        expect(container.is('.WelcomeScreen')).toBe(true);
    });

    // have to redo it!
    it('should mount to DOM', function () {
        const wrapper = mount(<WelcomeScreen />);
        console.log(wrapper.find('.WelcomeScreen').debug());
        expect(wrapper.find('.WelcomeScreen').length).toBe(1);
    });
});
