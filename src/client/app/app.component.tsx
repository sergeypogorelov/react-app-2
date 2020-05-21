import React from 'react';

import { Page } from './layout/page.component';
import { SearchMoviePage } from './pages/search-movie/search-movie-page.component';
import { ViewMoviePage } from './pages/view-movie/view-movie-page.component';

export const App = () => {
  return (
    <>
      <Page>
        {/* <SearchMoviePage /> */}
        <ViewMoviePage />
      </Page>
    </>
  );
};
