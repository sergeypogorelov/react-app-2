import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { initialState } from './redux/reducers';
import { configureStore } from './redux/configure-store';

import { Page } from './layout/page.component';
import { SearchMoviePage } from './pages/search-movie/search-movie-page.component';
import { ViewMoviePage } from './pages/view-movie/view-movie-page.component';

const store = configureStore(initialState);

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <Page>
        <SearchMoviePage />
        {/* <ViewMoviePage /> */}
      </Page>
    </ReduxProvider>
  );
};
