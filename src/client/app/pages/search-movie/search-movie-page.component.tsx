import React, { FunctionComponent } from 'react';

import { Header } from '../../shared/header/header.component';
import { HeaderTitle } from '../../shared/header/header-title/header-title.component';
import { MovieSearch } from './movie-search/movie-search.component';
import { MovieSearchSwitch } from './movie-search-switch/movie-search-switch.component';

export const SearchMoviePage: FunctionComponent<{}> = () => {
  return (
    <>
      <Header>
        <HeaderTitle>FIND YOUR MOVIE</HeaderTitle>
        <MovieSearch />
        <MovieSearchSwitch />
      </Header>
    </>
  );
};
