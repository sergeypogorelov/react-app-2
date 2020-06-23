import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { MovieSearchProps } from './movie-search-props.interface';
import { MovieSearch } from './movie-search.component';

const mockStore = configureStore();

function createTree(props?: Partial<MovieSearchProps>) {
  if (!props) {
    props = {};
  }

  const store = mockStore({
    searchMoviePage: {
      search: 'search',
    },
  });

  return renderer.create(
    <Provider store={store}>
      <MovieSearch {...props} />
    </Provider>
  );
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
