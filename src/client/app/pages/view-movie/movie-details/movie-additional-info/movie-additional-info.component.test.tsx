import React from 'react';
import renderer from 'react-test-renderer';

import { MovieAdditionalInfo } from './movie-additional-info.component';
import { MovieAdditionalInfoProps } from './movie-additional-info-props.interface';

test('MovieAdditionalInfo component should render correctly', () => {
  const props: MovieAdditionalInfoProps = {
    value: 'value',
    unit: 'unit',
  };
  const tree = renderer.create(<MovieAdditionalInfo {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});
