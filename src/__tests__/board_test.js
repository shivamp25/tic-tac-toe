import React from 'react';
import Board from '../components/Board';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Board', () => {
    const squares = ['', 'O', '', '', 'X', '', '', ''];

    it('should be selectable by class name ', () => {
        const container = shallow(<Board squares={squares} />);
        expect(container.is('.Board')).toBe(true);
    });

    it('should mount to the DOM ', () => {
        const wrapper = mount(<Board squares={squares} />);
        expect(wrapper.find('.Board').hostNodes()).toHaveLength(1);
    });

});
