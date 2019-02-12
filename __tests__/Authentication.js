/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Authentication from '../src/components/Authentication/index';
import { signIn } from '../src/app/authentication/actions';



/**
 * 
it('matches the snapshot', () => {
  const snapshot = shallow(<Authentication/>);
  expect(wrapper.find)
});
 */



it('matches the snapshot', () => {
  const tree = renderer.create(<Authentication />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('return empty signIn', () => {
  expect( signIn('','')).toEqual({});
})




it('test buton submitSignIn', function() {
  const wrapper = shallow(<Authentication />);
  let refreshData = jest.spyOn(wrapper.instance(), "submitSignIn");
  expect(wrapper.find('#submitSignIn')).toHaveLength(1);
  wrapper.find("[testID='submitSignIn']").onPress();
  expect(refreshData).toHaveBeenCalledTimes(1);
});