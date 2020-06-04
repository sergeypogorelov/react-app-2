import React from 'react';
import renderer from 'react-test-renderer';

import { MovieSearch } from './movie-search.component';
import { MovieSearchProps } from './movie-search-props.interface';

function createTree(props?: Partial<MovieSearchProps>) {
  if (!props) {
    props = {};
  }

  return renderer.create(<MovieSearch {...props} />);
}

describe('MovieSearch component', () => {
  it('should render correctly if unlabelled', () => {
    const tree = createTree().toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly if labelled', () => {
    const tree = createTree({
      controlLabeledBy: ['controlId'],
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
