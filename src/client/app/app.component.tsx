import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

import { urlFragments } from './core/constants/url-fragments';

import { Loading } from './shared/loading/loading.component';
import { Page } from './layout/page.component';
import { NotFoundPage } from './pages/not-found/not-found-page.component';

const LoadableSearchMoviePage = Loadable({
  loader: () => import('./pages/search-movie/search-movie-page.component'),
  loading: () => <Loading />,
});

const LoadableViewMoviePage = Loadable({
  loader: () => import('./pages/view-movie/view-movie-page.component'),
  loading: () => <Loading />,
});

export const App = () => {
  return (
    <Page>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/${urlFragments.searchMovie}`} />
        </Route>
        <Route
          path={`/${urlFragments.searchMovie}/:search`}
          component={LoadableSearchMoviePage}
        />
        <Route
          path={`/${urlFragments.searchMovie}`}
          component={LoadableSearchMoviePage}
        />
        <Route
          path={`/${urlFragments.viewMovie}/:movieId`}
          component={LoadableViewMoviePage}
        />
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Page>
  );
};
