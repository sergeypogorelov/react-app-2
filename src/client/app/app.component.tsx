import React from 'react';

import { Page } from './layout/page.component';
import { SearchMoviePage } from './pages/search-movie/search-movie-page.component';

export const App = () => {
  return (
    <>
      <Page>
        <SearchMoviePage />
      </Page>
    </>
  );
};
