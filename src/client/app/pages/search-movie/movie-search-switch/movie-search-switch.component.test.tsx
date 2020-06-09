import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import { MovieSearchSwitch } from './movie-search-switch.component';
import { SearchBy } from '../../../core/enums/search-by.enum';

const mockStore = configureStore();

describe('MovieSearchSwitch component', () => {
  it('should render correctly if title is selected', () => {
    const store = mockStore({
      searchMoviePage: {
        searchBy: SearchBy.Title,
      },
    });

    const wrapper = renderer
      .create(
        <Provider store={store}>
          <MovieSearchSwitch />
        </Provider>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly if genre is selected', () => {
    const store = mockStore({
      searchMoviePage: {
        searchBy: SearchBy.Genres,
      },
    });

    const wrapper = renderer
      .create(
        <Provider store={store}>
          <MovieSearchSwitch />
        </Provider>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
