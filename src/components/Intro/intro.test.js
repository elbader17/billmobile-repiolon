import React from 'react';
import renderer from 'react-test-renderer';
import Intro from './Intro';

describe('Rendering Component Intro', () => {
  test('renders correctly', () => {
    const component = renderer.create(<Intro />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
