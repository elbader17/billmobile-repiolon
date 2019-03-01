import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Confirmation from './Component';

describe('Rendering Component Confirmation', () => {
  test('renders correctly Confirmation', () => {
    const component = renderer.create(<Confirmation />).toJSON();
    expect(component).toMatchSnapshot();
  });
})
describe('Rendering Component and call  handleConfirmationCode', () => {
  it('call the handleConfirmationCode', () => {
    const clickFn = jest.fn();
    const wrapper = shallow(<Confirmation confirmCode={clickFn} />);
    const button = wrapper.findWhere(node => node.prop('testID') === 'submitConfirmation');
    button.simulate('press');
    expect(clickFn).toBeCalled();
  });
});

