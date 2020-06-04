import React from 'react';
import renderer from 'react-test-renderer';

import { ViewMoviePage } from './view-movie-page.component';

test('MovieDetails component should render correctly', () => {
  const tree = renderer.create(<ViewMoviePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
