import React from 'react';
import renderer from 'react-test-renderer';

import { SwitchContainer } from './switch-container.component';
import { SwitchContainerProps } from './switch-container-props.interface';

test('SwitchContainer component should render correctly', () => {
  const props: SwitchContainerProps = {
    switchProps: {
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
    },
  };

  const tree = renderer
    .create(<SwitchContainer {...props}>children</SwitchContainer>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
