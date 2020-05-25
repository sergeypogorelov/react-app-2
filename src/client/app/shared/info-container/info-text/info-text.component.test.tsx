import React from 'react';
import renderer from 'react-test-renderer';

import { InfoText } from './info-text.component';

test('InfoText component should render correctly', () => {
  const tree = renderer.create(<InfoText>test</InfoText>).toJSON();
  expect(tree).toMatchSnapshot();
});
