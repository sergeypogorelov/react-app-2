import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { urlFragments } from './core/constants/url-fragments';

import { Page } from './layout/page.component';
import SearchMoviePage from './pages/search-movie/search-movie-page.component';
import ViewMoviePage from './pages/view-movie/view-movie-page.component';
import { NotFoundPage } from './pages/not-found/not-found-page.component';

export const App = () => {
  return (
    <Page>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/${urlFragments.searchMovie}`} />
        </Route>
        <Route
          path={`/${urlFragments.searchMovie}/:search`}
          component={SearchMoviePage}
        />
        <Route
          path={`/${urlFragments.searchMovie}`}
          component={SearchMoviePage}
        />
        <Route
          path={`/${urlFragments.viewMovie}/:movieId`}
          component={ViewMoviePage}
        />
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Page>
  );
};
