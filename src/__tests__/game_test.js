import React from 'react';
import Game from '../components/Game';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Game', () => {

    it('should be able to display WelcomeScreen when welcomeScreen state is true ', () => {
        const container = shallow(<Game />);
        container.setState({ welcomeScreen: true });
        expect(container.is('.WelcomeScreen')).toBe(true);
    });

    it('should be able to display Game class when welcomeScreen state is false ', () => {
        const container = shallow(<Game />);
        container.setState({ welcomeScreen: false });
        expect(container.is('.Game')).toBe(true);
    });


});
