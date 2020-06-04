import React from 'react';
import renderer from 'react-test-renderer';

import { MoviesList } from './movies-list.component';

test('MoviesList component should render correctly', () => {
  const tree = renderer.create(<MoviesList />).toJSON();
  expect(tree).toMatchSnapshot();
});
