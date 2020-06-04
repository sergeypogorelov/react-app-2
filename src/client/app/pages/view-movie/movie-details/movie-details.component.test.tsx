import React from 'react';
import renderer from 'react-test-renderer';

import { MovieDetails } from './movie-details.component';

test('MovieDetails component should render correctly', () => {
  const tree = renderer.create(<MovieDetails />).toJSON();
  expect(tree).toMatchSnapshot();
});