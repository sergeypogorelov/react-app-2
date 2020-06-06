import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import { SearchMoviePage } from './search-movie-page.component';
import { SearchBy } from '../../core/enums/search-by.enum';
import { SortBy } from '../../core/enums/sort-by.enum';

const mockStore = configureStore();

test('SearchMoviePage component should render correctly', () => {
  const store = mockStore({
    searchMoviePage: {
      search: '',
      searchBy: SearchBy.Title,
      sortBy: SortBy.ReleaseData,
      movies: [],
      totalMovies: 0,
    },
  });

  const json = renderer
    .create(
      <Provider store={store}>
        <SearchMoviePage />
      </Provider>
    )
    .toJSON();

  expect(json).toMatchSnapshot();
});
