import './search-movie-page.component.scss';

import React, { FunctionComponent } from 'react';

import { Header } from '../../shared/header/header.component';
import { HeaderTitle } from '../../shared/header/header-title/header-title.component';
import { MovieSearch } from './movie-search/movie-search.component';
import { MovieSearchSwitch } from './movie-search-switch/movie-search-switch.component';
import { InfoContainer } from '../../shared/info-container/info-container.component';
import { InfoText } from '../../shared/info-container/info-text/info-text.component';
import { SwitchContainer } from '../../shared/switch-container/switch-container.component';
import { MoviesList } from '../../shared/movies-list/movies-list.component';

export const SearchMoviePage: FunctionComponent<{}> = () => {
  const headerTitleId = 'searchLabel';

  return (
    <div className="search-movie-page">
      <Header>
        <HeaderTitle id={headerTitleId}>FIND YOUR MOVIE</HeaderTitle>
        <MovieSearch controlLabeledBy={[headerTitleId]} />
        <MovieSearchSwitch />
      </Header>
      <InfoContainer>
        <InfoText>7 movies found</InfoText>
        <SwitchContainer>SORT BY</SwitchContainer>
      </InfoContainer>
      <MoviesList />
    </div>
  );
};
