import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import { ViewMoviePage } from './view-movie-page.component';

const mockStore = configureStore();

test('MovieDetails component should render correctly', () => {
  const store = mockStore({
    viewMoviePage: {
      movie: null,
      moviesByGenre: [],
    },
  });

  const json = renderer
    .create(
      <Provider store={store}>
        <ViewMoviePage />
      </Provider>
    )
    .toJSON();

  expect(json).toMatchSnapshot();
});
