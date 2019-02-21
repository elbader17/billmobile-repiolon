import React from 'react';
import { shallow } from 'enzyme';
import Authentication from './index';

it('matches the snapshot', () => {
  const tree = shallow(<Authentication />);
  expect(tree).toMatchSnapshot();
});


