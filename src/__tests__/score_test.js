import React from 'react';
import Score from '../components/Score';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Information from "../components/Information";
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

    it('should be able to display the correct score from props', () => {
        const wrapper = mount(<Score computerScore ={5} userScore={4} />);
        expect(wrapper.find('.computerScore').hostNodes().text()).toBe("5");
        expect(wrapper.find('.userScore').hostNodes().text()).toBe("4");
    });

});
