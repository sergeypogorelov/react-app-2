import React from 'react';
import renderer from 'react-test-renderer';

import { Switch } from './switch.component';

test('Switch component should render correctly', () => {
  const tree = renderer.create(<Switch />).toJSON();
  expect(tree).toMatchSnapshot();
});
