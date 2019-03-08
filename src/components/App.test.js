import 'react-native';
import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

test('renders correctly App', () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});

