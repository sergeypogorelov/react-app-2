import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { urlFragments } from './core/constants/url-fragments';

import { initialState } from './redux/reducers';
import configureStore from './redux/configure-store';

import { Page } from './layout/page.component';
import { SearchMoviePage } from './pages/search-movie/search-movie-page.component';
import { ViewMoviePage } from './pages/view-movie/view-movie-page.component';
import { NotFoundPage } from './pages/not-found/not-found-page.component';

const { store, persistor } = configureStore(initialState);

export const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Page>
            <Switch>
              <Route path="/" exact>
                <Redirect to={`/${urlFragments.searchMovie}`} />
              </Route>
              <Route
                path={`/${urlFragments.searchMovie}/:search`}
                component={SearchMoviePage}
              />
              <Route path={`/${urlFragments.searchMovie}`}>
                <SearchMoviePage />
              </Route>
              <Route
                path={`/${urlFragments.viewMovie}/:movieId`}
                component={ViewMoviePage}
              />
              <Route path="**">
                <NotFoundPage />
              </Route>
            </Switch>
          </Page>
        </Router>
      </PersistGate>
    </ReduxProvider>
  );
};
