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

    it('should mount to DOM', function () {
        const container = mount(<WelcomeScreen />);
        expect(container.find('.WelcomeScreen').length).toBe(1);
    });
});
