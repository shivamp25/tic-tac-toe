import React from 'react';
import Score from '../components/Score';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Score', () => {

    it('should be selectable by class name ', () => {
        const container = shallow(<Score computerScore ={5} userScore={4} />);
        expect(container.is('.Score')).toBe(true);
    });

    it('should mount to the DOM ', () => {
        const wrapper = mount(<Score computerScore ={5} userScore={4} />);
        expect(wrapper.find('.Score').hostNodes()).toHaveLength(1);
    });

});
