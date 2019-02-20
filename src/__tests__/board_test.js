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
        expect(container.is('.container')).toBe(true);
    });

});
