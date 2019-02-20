import React from 'react';
import Information from '../components/Information';
import { shallow, mount } from 'enzyme';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Information', () => {
    it('should be selectable by class name ', () => {
        const container = shallow(<Information text= "testing" />);
        expect(container.is('.Information')).toBe(true);
    });

    it('should mount to the DOM ', () => {
        const wrapper = mount(<Information text= "Mount on Dom" />);
        expect(wrapper.find('.Information').hostNodes()).toHaveLength(1);
    });

});
