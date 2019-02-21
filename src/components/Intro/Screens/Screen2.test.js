import React from 'react';
import renderer from 'react-test-renderer';
import Screen2 from './Screen2';

describe('Rendering Component Screen2', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Screen2 />).toJSON();
    expect(component).toMatchSnapshot();
  });
})
