import React from 'react';
import { shallow } from 'enzyme';
import Confirmation  from './Component';

test('render correctly component Confirmation', () => {
  //const component = shallow(<Confirmation />);
  //console.log(shallow(component.props().children({getParams: jest.fn()})));
  const navigation = { navigate: jest.fn() };

  const component = shallow(
    <Confirmation navigation={navigation} />
  );
  console.log(component.props().children());
  //console.log(shallow(component.props().children({})));
});
  