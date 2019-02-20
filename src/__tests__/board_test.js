import React from 'react';
import Board from '../components/Board';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Information from "../components/Information";
enzyme.configure({ adapter: new Adapter() });

describe('Board', () => {
    const squares = ['', 'O', '', '', 'X', '', '', ''];

    it('should be selectable by class name ', () => {
        const container = shallow(<Board squares={squares}/>);
        expect(container.is('.Board')).toBe(true);
    });
});
