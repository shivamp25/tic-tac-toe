import React from 'react';
import Board from '../components/Board';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Board', () => {
    const squares = ['X', '', '', '', '', '', '', 'X', 'O'];

    it('should be selectable by class name ', () => {
        const container = shallow(<Board squares={squares} />);
        expect(container.is('.Board')).toBe(true);
    });

    it('should mount to the DOM ', () => {
        const wrapper = mount(<Board squares={squares} />);
        expect(wrapper.find('.Board').hostNodes()).toHaveLength(1);
    });

    it('should be able to display the X and 0 correctly', () => {
        const wrapper = mount(<Board squares={squares} />);
        expect(wrapper.find('.btn7').hostNodes().text()).toBe('X');
        expect(wrapper.find('.btn0').hostNodes().text()).toBe('X');
        expect(wrapper.find('.btn0').hostNodes().text()).toBe('X');

    });


});
