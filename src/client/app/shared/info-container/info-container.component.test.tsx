import React from 'react';
import renderer from 'react-test-renderer';

import { InfoContainer } from './info-container.component';

test('InfoContainer component should render correctly', () => {
  const tree = renderer.create(<InfoContainer>test</InfoContainer>).toJSON();
  expect(tree).toMatchSnapshot();
});
