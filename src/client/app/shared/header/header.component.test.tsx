import React from 'react';
import renderer from 'react-test-renderer';

import { Header } from './header.component';

test('Header component should render correctly', () => {
  const tree = renderer.create(<Header>test</Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
