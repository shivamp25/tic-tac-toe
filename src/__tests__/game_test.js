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

    it('should be able to select Mark for Players', function () {
        const wrapper = mount(<Game />);

        wrapper.find('.xButton').hostNodes().prop('onClick')();
        expect(wrapper.state().userMark).toBe('X');
        expect(wrapper.state().computerMark).toBe('O');

        wrapper.setState({ welcomeScreen: true });

        wrapper.find('.oButton').hostNodes().prop('onClick')();
        expect(wrapper.state().userMark).toBe('O');
        expect(wrapper.state().computerMark).toBe('X');
    });


});
