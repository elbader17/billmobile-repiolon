import React from 'react';
import renderer from 'react-test-renderer';
import Screen1 from './Screen1';

describe('Rendering Component Screen1', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Screen1 />).toJSON();
    expect(component).toMatchSnapshot();
  });
})
