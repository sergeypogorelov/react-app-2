import React from 'react';
import renderer from 'react-test-renderer';

import { Switch } from './switch.component';

test('Switch component should render correctly', () => {
  const props = {
    left: {
      label: 'left label',
      value: 'left value',
    },
    right: {
      label: 'right label',
      value: 'right value',
    },
    currentValue: 'left value',
    onChange: jest.fn(),
  };

  const tree = renderer.create(<Switch {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});
