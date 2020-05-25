import React from 'react';
import renderer from 'react-test-renderer';

import { TitleMain } from './title-main.component';

test('TitleMain component should render correctly', () => {
  const tree = renderer.create(<TitleMain />).toJSON();
  expect(tree).toMatchSnapshot();
});
