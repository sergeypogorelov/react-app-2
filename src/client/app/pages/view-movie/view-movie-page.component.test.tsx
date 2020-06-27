import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import ViewMoviePage from './view-movie-page.component';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    movieId: 1,
  }),
}));

const mockStore = configureStore();

test('MovieDetails component should render correctly', () => {
  const store = mockStore({
    viewMoviePage: {
      movie: null,
      moviesByGenre: [],
    },
    searchMoviePage: {
      search: '',
    },
  });

  const json = renderer
    .create(
      <Provider store={store}>
        <StaticRouter>
          <ViewMoviePage />
        </StaticRouter>
      </Provider>
    )
    .toJSON();

  expect(json).toMatchSnapshot();
});
