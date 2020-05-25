import React from 'react';
import renderer from 'react-test-renderer';

import { MovieSearchSwitch } from './movie-search-switch.component';

test('MovieSearchSwitch component should render correctly', () => {
  const tree = renderer.create(<MovieSearchSwitch />).toJSON();
  expect(tree).toMatchSnapshot();
});
