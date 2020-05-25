import React from 'react';
import renderer from 'react-test-renderer';

import { SwitchContainer } from './switch-container.component';

test('SwitchContainer component should render correctly', () => {
  const tree = renderer
    .create(<SwitchContainer>test</SwitchContainer>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
