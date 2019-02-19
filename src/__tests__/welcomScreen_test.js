import React from 'react';
import { shallow, mount } from 'enzyme';
import WelcomeScreen from '../components/WelcomeScreen';

describe('WelcomeScreen', () => {
    it('should be selected by class name', () => {
        const container = shallow(<WelcomeScreen/>);
        expect(container.is('.WelcomeScreen')).tobe(true);
    });

});
