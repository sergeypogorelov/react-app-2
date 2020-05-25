import React from 'react';
import renderer from 'react-test-renderer';

import { HeaderTitle } from './header-title.component';
import { HeaderTitleProps } from './header-title-props.interface';

test('HeaderTitle component should render correctly', () => {
  const props: HeaderTitleProps = {
    id: 'id',
  };
  const tree = renderer
    .create(<HeaderTitle {...props}>test</HeaderTitle>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
