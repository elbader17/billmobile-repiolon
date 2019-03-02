import React from 'react';
import { shallow } from 'enzyme';
import Authentication from './index';

describe('Rendering Component Authentication', () => {
  it('renders correctly Authentication', () => {
    const component = shallow(<Authentication />);
    expect(component).toMatchSnapshot();
  })
});

describe('Test ButtonGroup ',() => {
  it('Test ButtonGroup index to equal a 0', () => {
   const wrapper = shallow(<Authentication />);
   wrapper.setState({selectedIndex: 1});
   const button = wrapper.findWhere(node => node.prop('testID') === 'buttonGroup');
   button.simulate('press');
   expect(wrapper.state().selectedIndex).toEqual(0);
  })
  it('Test ButtonGroup index to equal a 1', () => {
    const wrapper = shallow(<Authentication />);
    wrapper.setState({selectedIndex: 0});
    const button = wrapper.findWhere(node => node.prop('testID') === 'buttonGroup');
    button.simulate('press');
    expect(wrapper.state().selectedIndex).toEqual(1);
   })  
});