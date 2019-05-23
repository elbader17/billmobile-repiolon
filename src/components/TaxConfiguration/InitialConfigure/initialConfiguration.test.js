import React from 'react';
import { shallow } from 'enzyme';
import InitialConfiguration from './Component';

const fnMock = jest.fn();

test('render correctly component InitialConfiguration', () => {
  const component = shallow(<InitialConfiguration />)
  expect(component).toMatchSnapshot();
});

test('call the navigateTaxConfiguration function', () => {
  const navigation = { navigate: fnMock };
  const component = shallow(<InitialConfiguration navigation={navigation}/>);
  const button = component.findWhere(node => node.prop('testID') === 'buttonConfigure');
  button.simulate('press');
  expect(fnMock).toBeCalled();
});