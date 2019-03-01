import React from 'react';
import { shallow } from 'enzyme';
import Authentication from './index';

it('matches the snapshot', () => {
  const tree = shallow(<Authentication />);
  expect(tree).toMatchSnapshot();
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

